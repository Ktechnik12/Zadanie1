Obraz: https://hub.docker.com/repository/docker/ktechnik/zadanie3/general

:white_check_mark: 3.0 Należy stworzyć aplikację kliencką w Kotlinie we frameworku Ktor, która pozwala na przesyłanie wiadomości na platformę Discord

:white_check_mark: 3.5 Aplikacja jest w stanie odbierać wiadomości użytkowników z platformy Discord skierowane do aplikacji (bota)

:white_check_mark: 4.0 Zwróci listę kategorii na określone żądanie użytkownika

:white_check_mark: 4.5 Zwróci listę produktów wg żądanej kategorii

:x: 5.0 Aplikacja obsłuży dodatkowo jedną z platform: Slack lub Messenger


# Aplikacja

## Wymagania 
- Docker 
- Token bota Discord 
- Bot dodany do serwera

## Uruchomienie 

### Build 
```bash docker build -t DOCKER_NAME . ```

### Run

```docker run -p 8080:8080 -e DISCORD_TOKEN=YOUR_TOKEN DOCKER_NAME ```

## Komendy Discord
- !ping
- !categories
- !products <id>

## Przyklad testu z curl na wyslanie wiadomosci: 
``` curl -X POST http://localhost:8080/send -H "Content-Type: application/json" -d '{ "message":"Test z API", "channelId":"123456789" }'```
