const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./db");
const passport = require("passport");

require("./auth");
const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    await db.query(`INSERT INTO users(email, password_hash) VALUES($1,$2)`, [email, hash]);

    res.json({ msg: "ok" });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const r = await db.query(`SELECT * FROM users WHERE email=$1`, [email]);

    if (!r.rows.length) {
        return res.status(401).json({ error: "Użytkownik nie istnieje" });
    }

    const ok = await bcrypt.compare(password, r.rows[0].password_hash);

    if (!ok) {
        return res.status(401).json({ error: "Niepoprawne hasło" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);

    res.json({ token });
});

app.get("/auth/google", passport.authenticate("google", {
    scope: [
        "profile",
        "email"
    ],
    prompt: "select_account consent"
}));

app.get("/auth/google/callback", passport.authenticate("google", {
    session: false
}
), async (req, res) => {
    const user = req.user;
    await db.query(
        `INSERT INTO users( email, provider, provider_id, access_token, refresh_token)
        VALUES( $1, $2, $3, $4, $5) ON CONFLICT(email) DO UPDATE SET access_token=$4, refresh_token=$5 `,
        [user.email, user.provider, user.provider_id, user.access_token, user.refresh_token]
    );

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

    res.redirect(`http://localhost:5173/?token=${token}`);
});

app.get("/auth/github", passport.authenticate("github", {
    scope: [
        "user:email"
    ],
    prompt: "select_account",
    allow_signup: true
}));

app.get("/auth/github/callback", passport.authenticate("github", {
    session: false
}
), async (req, res) => {
    const user = req.user;
    await db.query(
        `INSERT INTO users( email, provider, provider_id, access_token, refresh_token)
        VALUES( $1, $2, $3, $4, $5) ON CONFLICT(email) DO UPDATE SET access_token=$4, refresh_token=$5`,
        [user.email, user.provider, user.provider_id, user.access_token, user.refresh_token]
    );

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);

    res.redirect(`http://localhost:5173/?token=${token}`);
});

app.get("/me", (req, res) => {
    const auth = req.headers.authorization;

    if (!auth) {
        return res.json({ logged: false });
    }

    try {
        const token = auth.split(" ")[1];

        const user = jwt.verify(token, process.env.JWT_SECRET);

        res.json({ logged: true, email: user.email });

    } catch {
        res.json({ logged: false });
    }
});

app.listen(8080, () => console.log("server"));