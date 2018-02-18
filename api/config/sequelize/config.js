// config/sequelize.js
var path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../.env")
});

console.log("process.env.USER_NAME: ", process.env.USER_NAME);

// old URL: "https://radiant-taiga-58264.herokuapp.com"
const databaseURL = "https://open-meta-project.herokuapp.com/";

module.exports = {
  "development": {
    "username": process.env.USER_NAME,
    "password": process.env.PASSWORD,
    "database": "open_meta_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.USER_NAME,
    "password": process.env.PASSWORD,
    "database": "open_meta_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "username": "root",
    "password": null,
    "database": "open_meta_production",
    "host": databaseURL,
    "dialect": "postgres"
  }
}
