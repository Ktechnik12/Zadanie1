FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y curl unzip wget openjdk-8-jdk && \
    wget https://services.gradle.org/distributions/gradle-8.7-bin.zip -O gradle.zip && \
    unzip gradle.zip -d /opt && \
    ln -s /opt/gradle-8.7/bin/gradle /usr/bin/gradle && \
    rm gradle.zip && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . /app

RUN gradle build

CMD ["java", "-jar", "build/libs/app.jar"]