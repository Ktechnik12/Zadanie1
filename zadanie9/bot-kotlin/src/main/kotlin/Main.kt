import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.request.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.plugins.contentnegotiation.*
import kotlinx.serialization.*
import kotlinx.serialization.json.*

import net.dv8tion.jda.api.*
import net.dv8tion.jda.api.hooks.ListenerAdapter
import net.dv8tion.jda.api.events.message.MessageReceivedEvent
import net.dv8tion.jda.api.requests.GatewayIntent
import net.dv8tion.jda.api.utils.MemberCachePolicy

import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.request.*
import io.ktor.http.*
import kotlinx.coroutines.runBlocking

// --------- MODELE ---------

@Serializable
data class Category(val id: Int, val name: String)

@Serializable
data class Product(val id: Int, val name: String, val categoryId: Int)

@Serializable
data class MessageRequest(
    val message: String,
    val channelId: String
)

@Serializable
data class ChatRequest(
    val message: String
)

@Serializable
data class ChatResponse(
    val response: String
)

// --------- FAKE BAZA ---------

object Database {
    val categories = listOf(
        Category(1, "Elektronika"),
        Category(2, "Książki"),
        Category(3, "Gaming")
    )

    val products = listOf(
        Product(1, "Laptop", 1),
        Product(2, "Monitor", 1),
        Product(3, "Wiedźmin", 2),
        Product(4, "Pad Xbox", 3)
    )
}


// --------- DISCORD LISTENER ---------

class DiscordListener(private val httpClient: HttpClient) : ListenerAdapter() {

    override fun onMessageReceived(event: MessageReceivedEvent) {
        if (event.author.isBot) return

        val msg = event.message.contentRaw

        when {

            msg == "!ping" -> {
                event.channel.sendMessage("pong").queue()
            }

            msg == "!categories" -> {
                val text = Database.categories.joinToString("\n") {
                    "${it.id}. ${it.name}"
                }
                event.channel.sendMessage(text).queue()
            }

            msg.startsWith("!products") -> {
                val id = msg.split(" ").getOrNull(1)?.toIntOrNull()

                val products = Database.products.filter {
                    it.categoryId == id
                }

                val text = products.joinToString("\n") {
                    it.name
                }

                event.channel.sendMessage(
                    text.ifEmpty { "Brak produktów" }
                ).queue()
            }
            msg.startsWith("!gpt ") -> {
                val question = msg.removePrefix("!gpt ")
                Thread {
                    try {
                        val response: ChatResponse = kotlinx.coroutines.runBlocking {
                                httpClient.post("http://gpt-service:8000/chat") {
                                    contentType(ContentType.Application.Json)
                                    setBody(ChatRequest(question))
                                }.body()
                            }
                        event.channel.sendMessage(response.response).queue()
                    } catch (e: Exception) {
                        e.printStackTrace()
                        event.channel.sendMessage("Błąd połączenia z GPT Service").queue()
                    }
                }.start()
            }
        }
    }
}

// --------- MAIN ---------

fun main() {

    val token = System.getenv("DISCORD_TOKEN")
    val httpClient = HttpClient(CIO) {

        install(io.ktor.client.plugins.contentnegotiation.ContentNegotiation) {
            json()
        }
    }

    val jda = JDABuilder.createDefault(token)
        .enableIntents(
            GatewayIntent.MESSAGE_CONTENT,
            GatewayIntent.GUILD_MESSAGES,
            GatewayIntent.GUILD_MEMBERS
        )
        .setMemberCachePolicy(MemberCachePolicy.ALL)
        .addEventListeners(DiscordListener(httpClient))
        .build()

    embeddedServer(Netty, port = 8080) {

        install(ContentNegotiation) {
            json(Json {
                prettyPrint = true
                isLenient = true
                ignoreUnknownKeys = true
            })
        }

        routing {

            get("/") {
                call.respondText("Ktor Discord Bot running")
            }

            // 3.0 wysyłanie wiadomości
            post("/send") {
                val req = call.receive<MessageRequest>()

                val channel = jda.getTextChannelById(req.channelId)

                channel?.sendMessage(req.message)?.queue()

                call.respond(mapOf("status" to "sent"))
            }

            // 4.0 lista kategorii
            get("/categories") {
                call.respond<List<Category>>(Database.categories)
            }

            // 4.5 produkty po kategorii
            get("/products/{categoryId}") {
                val id = call.parameters["categoryId"]!!.toInt()
                val products = Database.products.filter { it.categoryId == id }
                call.respond<List<Product>>(products)
            }
        }
    }.start(wait = true)
}