**Zadanie 1**

[Link do commita](https://github.com/Ktechnik12/Zadanie1/commit/7cc6c728c2f936c4f03c3e655055fcc547c6d89e)

:white_check_mark: 3.0 obraz ubuntu z Pythonem w wersji 3.10 [Link do Docker Huba](https://hub.docker.com/repository/docker/ktechnik/python3.10/)

:white_check_mark: 3.5 obraz ubuntu:24.02 z Javą w wersji 8 oraz Kotlinem [Link do Docker Huba](https://hub.docker.com/repository/docker/ktechnik/java8kotrlin/)

:white_check_mark: 4.0 do powyższego należy dodać najnowszego Gradle’a oraz paczkę JDBC SQLite w ramach projektu na Gradle (build.gradle) [Link do Docker Huba](https://hub.docker.com/repository/docker/ktechnik/java8kotrlin_gradle/)

:white_check_mark: 4.5 tworzyć przykład typu HelloWorld oraz uruchomienie aplikacji przez CMD oraz gradle [Link do Docker Huba](https://hub.docker.com/repository/docker/ktechnik/hello-1/)

:x: 5.0 dodać konfigurację docker-compose


**Zadanie 2**

[Link do obrazu](https://hub.docker.com/repository/docker/ktechnik/zadanie2/general)

:white_check_mark: 3.0 Należy stworzyć kontroler do Produktów

:white_check_mark: 3.5 Do kontrolera należy stworzyć endpointy zgodnie z CRUD - dane pobierane z listy

:white_check_mark: 4.0 Należy stworzyć kontrolery do Kategorii oraz Koszyka + endpointy zgodnie z CRUD

:white_check_mark: 4.5 Należy aplikację uruchomić na dockerze (stworzyć obraz) oraz dodać skrypt uruchamiający aplikację via ngrok

:x: 5.0 Należy dodać konfigurację CORS dla dwóch hostów dla metod CRUDs

[Link do commita](https://github.com/Ktechnik12/Zadanie2/commit/49dc12eb7b30060976f4b615fc8f40defdd197d8)


[Nagranie](https://ujchmura-my.sharepoint.com/:v:/g/personal/kacper_krehlik_student_uj_edu_pl/IQCl89wKWtwfRblMFhBy4vLcAaihh67Lbhjf0kSjMjNIapk?e=9XWLf0)


**Zadanie 3**

[Link do obrazu](https://hub.docker.com/repository/docker/ktechnik/zadanie3/general)

:white_check_mark: 3.0 Należy stworzyć aplikację kliencką w Kotlinie we frameworku Ktor, która pozwala na przesyłanie wiadomości na platformę Discord

:white_check_mark: 3.5 Aplikacja jest w stanie odbierać wiadomości użytkowników z platformy Discord skierowane do aplikacji (bota)

:white_check_mark: 4.0 Zwróci listę kategorii na określone żądanie użytkownika

:white_check_mark: 4.5 Zwróci listę produktów wg żądanej kategorii

:x: 5.0 Aplikacja obsłuży dodatkowo jedną z platform: Slack lub Messenger


[Link do commita](https://github.com/Ktechnik12/Zadanie1/commit/e35aa7815c8f7ecef07153768b0eac53086a25a5)


[Nagranie](https://ujchmura-my.sharepoint.com/:v:/g/personal/kacper_krehlik_student_uj_edu_pl/IQBQTFnrHzWsTYVoaYs90eydARlLURvHUEU52ExmzpQMC0o?e=OD1AH8)


**Zadanie 4**

[Link do obrazu](https://hub.docker.com/repository/docker/ktechnik/zadanie4/general)

:white_check_mark: 3.0 Należy stworzyć aplikację we frameworki echo w j. Go, która będziemiała kontroler Produktów zgodny z CRUD

:x: 3.5 Należy stworzyć model Produktów wykorzystując gorm oraz wykorzystać model do obsługi produktów (CRUD) w kontrolerze (zamiast listy)

:x: 4.0 Należy dodać model Koszyka oraz dodać odpowiedni endpoint

:x: 4.5 Należy stworzyć model kategorii i dodać relację między kategorią, a produktem

;x: 5.0 pogrupować zapytania w gorm’owe scope'y


[Link do commita](https://github.com/Ktechnik12/Zadanie1/commit/55cb6ee1528ab388c269afa613794bdf617c6442)


[Nagranie](https://ujchmura-my.sharepoint.com/:v:/g/personal/kacper_krehlik_student_uj_edu_pl/IQDnCw4p1mGnQZMen2LWPy9IARS3Spm_q0-Ys756fFGVz0c?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=xzYZhH)


**Zadanie 5**

Obrazy:
- [Klient](https://hub.docker.com/repository/docker/ktechnik/zadanie5-client/general)
- [Serwer](https://hub.docker.com/repository/docker/ktechnik/zadanie5-server/general)

:white_check_mark: 3.0 W ramach projektu należy stworzyć dwa komponenty: Produkty oraz
Płatności; Płatności powinny wysyłać do aplikacji serwerowej dane, a w
Produktach powinniśmy pobierać dane o produktach z aplikacji
serwerowej;

:white_check_mark: 3.5 Należy dodać Koszyk wraz z widokiem; należy wykorzystać routing

:white_check_mark: 4.0 Dane pomiędzy wszystkimi komponentami powinny być przesyłane za
pomocą React hooks

:white_check_mark: 4.5 Należy dodać skrypt uruchamiający aplikację serwerową oraz
kliencką na dockerze via docker-compose

:x: 5.0 Należy wykorzystać axios’a oraz dodać nagłówki pod CORS


[Link do commita](https://github.com/Ktechnik12/Zadanie1/commit/179d2df7cccd8c0f903ee225b7f4299be3b5ba33)


[Nagranie](https://ujchmura-my.sharepoint.com/:v:/g/personal/kacper_krehlik_student_uj_edu_pl/IQDQIC08bHbjSo2Ahtrk13xJAS2zkokzzNP4YdOU4tNQLvg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=xJXbV6)


**Zadanie 6**

Obrazy:
- [Klient](https://hub.docker.com/repository/docker/ktechnik/zadanie6-client/general)
- [Serwer](https://hub.docker.com/repository/docker/ktechnik/zadanie6-server/general)

:white_check_mark: Należy stworzyć 20 przypadków testowych w CypressJS lub Selenium (Kotlin, Python, Java, JS, Go, Scala)

:white_check_mark: 3.5 Należy rozszerzyć testy funkcjonalne, aby zawierały minimum 50 asercji

:white_check_mark: 4.0 Należy stworzyć testy jednostkowe do wybranego wcześniejszego projektu z minimum 50 asercjami

:white_check_mark: 4.5 Należy dodać testy API, należy pokryć wszystkie endpointy z minimum jednym scenariuszem negatywnym per endpoint

:x: 5.0 Należy uruchomić testy funkcjonalne na Browserstacku


[Link do commita](https://github.com/Ktechnik12/Zadanie1/commit/27d1ca012a98b07416493a876813cfc1524f4b98)


[Nagranie](https://ujchmura-my.sharepoint.com/:v:/g/personal/kacper_krehlik_student_uj_edu_pl/IQCKONkCA8qNRoQM7SOiew1aAQgnqTt6nbGbOLA5HGlpdJs?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=8FSECb)


**Zadanie 7**

Obrazy: 
- [Serwer](https://hub.docker.com/repository/docker/ktechnik/zad7-server/general)
- [Klient](https://hub.docker.com/repository/docker/ktechnik/zad7-client/general)

:white_check_mark: 3.0 Należy dodać litera do odpowiedniego kodu aplikacji serwerowej w hookach gita

:white_check_mark: 3.5 Należy wyeliminować wszystkie bugi w kodzie w Sonarze (kod aplikacji serwerowej)

:white_check_mark: 4.0 Należy wyeliminować wszystkie zapaszki w kodzie w Sonarze (kodaplikacji serwerowej)

:white_check_mark: 4.5 Należy wyeliminować wszystkie podatności oraz błędy bezpieczeństwa w kodzie w Sonarze (kod aplikacji serwerowej)

[Link do ostatniego commita serwera](https://github.com/Ktechnik12/app-server/commit/1ceb9de0f281c4e91a2ab73855c773b115ab32fe)

[Repozytorium serwera](https://github.com/Ktechnik12/app-server)

:x: Należy wyeliminować wszystkie błędy oraz zapaszki w kodzie aplikacji klienckiej

[Link do ostatniego commita klienta](https://github.com/Ktechnik12/app-client/commit/fd04365d7312763a8767a37e5ce6a1401c3dde43)

[Repozytorium klienta](https://github.com/Ktechnik12/app-client)


**Zadanie 8**

Obrazy:
- [Frontend](https://hub.docker.com/repository/docker/ktechnik/zad8-frontend/general)
- [Backend](https://hub.docker.com/repository/docker/ktechnik/zad8-backend/general)

:white_check_mark: 3.0 logowanie przez aplikację serwerową (bez Oauth2)

:white_check_mark: 3.5 rejestracja przez aplikację serwerową (bez Oauth2)

:white_check_mark: 4.0 ogowanie via Google OAuth2

:white_check_mark: 4.5 logowanie via Facebook lub Github OAuth2

:white_check_mark: 5.0 zapisywanie danych logowania OAuth2 po stronie serwera


[Link do commita](https://github.com/Ktechnik12/Zadanie1/commit/6fd9c3b038cc33dbc562c70d9eab656a9a63e148)


[Nagranie](https://ujchmura-my.sharepoint.com/:v:/g/personal/kacper_krehlik_student_uj_edu_pl/IQB0xKOQIl-2TK0kgoY6kh2HAUcXZhR0MmVM74JTUZHnhzM)


**Zadanie 9**

Obrazy:
- [Bot](https://hub.docker.com/repository/docker/ktechnik/zad9-bot/general)
- [GPT](https://hub.docker.com/repository/docker/ktechnik/zad9-gpt/general)

:white_check_mark: 3.0 należy stworzyć po stronie serwerowej osobny serwis do łącznia z chatGPT

:white_check_mark: 3.5 należy połączyć serwis z interfejsem frontendowym via serwis w Kotlinie (zadanie 3) - discord + JS

:white_check_mark: 4.0 stworzyć listę 5 różnych otwarć oraz zamknięć rozmowy

:x: 4.5 filtrowanie po zagadnieniach związanych ze sklepem (np. ograniczenie się jedynie do ubrań oraz samego sklepu) do GPT

:x: 5.0 filtrowanie odpowiedzi po sentymencie


[Link do commita](https://github.com/Ktechnik12/Zadanie1/commit/9dc53d15d8d1e614c1797eec4710debce2dbeef2)


[Nagranie](https://ujchmura-my.sharepoint.com/:f:/g/personal/kacper_krehlik_student_uj_edu_pl/IgBblYTKYo42R77oCLB3bwitAafMtTpZQKGoU_iOEOH3_d0)
