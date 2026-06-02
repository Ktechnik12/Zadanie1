from fastapi import FastAPI
from pydantic import BaseModel
import requests

app = FastAPI()

OLLAMA_URL = "http://host.docker.internal:11434/api/generate"

import random

greetings = [
    "Witaj!",
    "Cześć!",
    "Dzień dobry!",
    "Hej!",
    "Miło Cię widzieć!"
]

farewells = [
    "Do zobaczenia!",
    "Miłego dnia!",
    "Powodzenia!",
    "Zapraszam ponownie!",
    "Dziękuję za rozmowę!"
]

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/chat")
def chat(req: ChatRequest):

    response = requests.post(
        OLLAMA_URL,
        json={
            "model": "llama3.2",
            "prompt": req.message,
            "stream": False
        }
    )

    data = response.json()

    return {
        "response":
            f"{random.choice(greetings)}\n\n"
            f"{data['response']}\n\n"
            f"{random.choice(farewells)}"
    }