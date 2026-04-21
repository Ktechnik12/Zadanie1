# Zadanie 5

Obrazy:
- Klient: https://hub.docker.com/repository/docker/ktechnik/zadanie5-client/general
- Serwer: https://hub.docker.com/repository/docker/ktechnik/zadanie5-server/general

:white_check_mark: 3.0 W ramach projektu należy stworzyć dwa komponenty: Produkty oraz
Płatności; Płatności powinny wysyłać do aplikacji serwerowej dane, a w
Produktach powinniśmy pobierać dane o produktach z aplikacji
serwerowej;

:white_check_mark: 3.5 Należy dodać Koszyk wraz z widokiem; należy wykorzystać routing

:white_check_mark: 4.0 Dane pomiędzy wszystkimi komponentami powinny być przesyłane za
pomocą React hooks

:white_check_mark: 4.5 Należy dodać skrypt uruchamiający aplikację serwerową oraz
kliencką na dockerze via docker-compose


Nagranie: https://ujchmura-my.sharepoint.com/:v:/g/personal/kacper_krehlik_student_uj_edu_pl/IQDQIC08bHbjSo2Ahtrk13xJAS2zkokzzNP4YdOU4tNQLvg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=xJXbV6


## URUCHOMIENIE APLIKACJI

### Opcja 1: Używając skryptu (macOS/Linux)
```bash
chmod +x start.sh
./start.sh
```

### Opcja 2: Ręcznie za pomocą docker-compose
w katalogu projektu wykonaj:
```bash
docker-compose up --build
```


## Dostęp do aplikacji

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:8080

