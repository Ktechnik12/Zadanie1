#!/bin/bash

echo "=========================================="
echo "E-Commerce Application - Docker Setup"
echo "=========================================="
echo ""

if ! command -v docker &> /dev/null; then
    echo "Docker nie jest zainstalowany!"
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "Docker Compose nie jest zainstalowany!"
    exit 1
fi


echo "Budowanie obrazów Docker..."
docker-compose build

echo ""
echo "Uruchamianie aplikacji..."
docker-compose up


