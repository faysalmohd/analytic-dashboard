import Database from "better-sqlite3";

const db = new Database("database.db");

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    image TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    `
).run();

export default db;
