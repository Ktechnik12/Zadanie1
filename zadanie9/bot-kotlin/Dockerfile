FROM gradle:8.5-jdk17 AS build
WORKDIR /app
COPY . .
RUN gradle installDist

FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=build /app/build/install/ktor-discord-bot /app

CMD ["bin/ktor-discord-bot"]