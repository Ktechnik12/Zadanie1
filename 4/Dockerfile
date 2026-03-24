FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y curl unzip wget openjdk-8-jdk && \
    rm -rf /var/lib/apt/lists/*

# Kotlin
RUN curl -L https://github.com/JetBrains/kotlin/releases/download/v1.9.24/kotlin-compiler-1.9.24.zip -o kotlin.zip && \
    unzip kotlin.zip -d /opt && \
    ln -s /opt/kotlinc/bin/kotlin /usr/bin/kotlin && \
    ln -s /opt/kotlinc/bin/kotlinc /usr/bin/kotlinc && \
    rm kotlin.zip

# Gradle
RUN curl -L https://services.gradle.org/distributions/gradle-8.7-bin.zip -o gradle.zip && \
    unzip gradle.zip -d /opt && \
    ln -s /opt/gradle-8.7/bin/gradle /usr/bin/gradle && \
    rm gradle.zip

# SQLite JDBC
RUN mkdir /jdbc && \
    curl -L https://repo1.maven.org/maven2/org/xerial/sqlite-jdbc/3.45.3.0/sqlite-jdbc-3.45.3.0.jar \
    -o /jdbc/sqlite-jdbc.jar

WORKDIR /app

CMD sh -c "java -version && kotlin -version && gradle -v"