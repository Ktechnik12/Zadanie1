FROM golang:1.24 AS builder

WORKDIR /app
RUN mkdir -p /app/data

COPY . .

RUN go mod tidy
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o app main.go
RUN ls -la /app

FROM debian:bookworm-slim

WORKDIR /app

COPY --from=builder /app/app .

EXPOSE 1323

CMD ["./app"]