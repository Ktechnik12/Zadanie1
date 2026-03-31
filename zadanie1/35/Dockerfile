FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y software-properties-common curl unzip && \
    add-apt-repository universe && \
    apt-get update && \
    apt-get install -y openjdk-8-jdk && \
    curl -L https://github.com/JetBrains/kotlin/releases/download/v1.9.24/kotlin-compiler-1.9.24.zip -o kotlin.zip && \
    unzip kotlin.zip -d /opt && \
    ln -s /opt/kotlinc/bin/kotlin /usr/bin/kotlin && \
    ln -s /opt/kotlinc/bin/kotlinc /usr/bin/kotlinc && \
    rm kotlin.zip && \
    rm -rf /var/lib/apt/lists/*

CMD sh -c "java -version && kotlin -version"