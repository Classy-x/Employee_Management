require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || 5433,
  database: process.env.DB_NAME || "employee_db",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD,
});

module.exports = pool;