const knex = require("knex");
const config  = require("../shared/config");
const db = knex({
  client: "postgresql",
  connection: {
    database: config.db.name,
    user: config.db.username,
    password: config.db.password,
  },
});

module.exports = db;
