CREATE TABLE users(
 id SERIAL PRIMARY KEY,
 email TEXT UNIQUE,
 password_hash TEXT,
 provider TEXT,
 provider_id TEXT,
 access_token TEXT,
 refresh_token TEXT,
 created_at TIMESTAMP DEFAULT NOW()
);