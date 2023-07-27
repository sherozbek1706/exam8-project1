const dotenv = require("dotenv");
dotenv.config();

const config = {
  db: {
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
};

module.exports = config;
