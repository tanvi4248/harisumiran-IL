const { Client } = require("pg");
const dbName = "harisumiran";
const client = new Client(`postgres://localhost:5432/${dbName}`);

module.exports = client;
