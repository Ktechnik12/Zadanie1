FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y python3.10 python3.10-venv python3-pip && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

CMD ["python3", "--version"]