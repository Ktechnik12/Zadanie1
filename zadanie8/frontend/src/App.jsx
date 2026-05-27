import { useState, useEffect } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("jwt", token);
      window.history.replaceState({}, document.title, "/");
    }

    fetch("http://localhost:8080/me",
      {
        headers: {
          Authorization:
            `Bearer ${localStorage.getItem("jwt")}`
        }
      }
    ).then(
      r => r.json()
    ).then(
        data => {
          if (data.logged) {
            setUser(data);
          }
        });
  }, []);


  async function register() {
    await fetch("http://localhost:8080/register",{
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({email, password})
      }
    );

    alert("zarejestrowano");
  }

  async function login() {
    setMessage("");
    const r = await fetch("http://localhost:8080/login",{
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({email, password})
        }
      );

    const data = await r.json();

    if (!r.ok) {
      setMessage(data.error);
      return;
    }

    localStorage.setItem("jwt", data.token);

    const me = await fetch("http://localhost:8080/me",{
          headers: {
            Authorization:
              `Bearer ${data.token}`
          }
        }
      );

    const user = await me.json();
    setUser(user);
    setMessage("Zalogowano");
  }

  function googleLogin() {
    window.location = "http://localhost:8080/auth/google";
  }

  function githubLogin() {
    window.location = "http://localhost:8080/auth/github";
  }

  function logout() {
    localStorage.removeItem("jwt");
    setUser(null);
    window.history.replaceState({}, document.title, "/");
  }

  return (
    <div
      style={{
        padding: 50
      }}
    >
      <h1>
        OAuth project
      </h1>
      
      {user ?
          <div>
            <h2>
              Zalogowany:
              {user.email}
            </h2>
          </div>
          :
          <h2>
            Niezalogowany
          </h2>
      }

      <input
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )}
        placeholder="email"
      />

      <br />
      <br />

      <input
        type="password"
        value={password}
        onChange={(e) =>
          setPassword(
            e.target.value
          )}
        placeholder="password"
      />

      <br />
      <br />

      <button onClick={register}>
        register
      </button>

      <button onClick={login}>
        login
      </button>
      <button onClick={logout}>
        logout
      </button>

      <hr />

      <button onClick={googleLogin}>
        Google OAuth
      </button>

      <button onClick={githubLogin}>
        Github OAuth
      </button>
    </div>
  );
}
export default App;