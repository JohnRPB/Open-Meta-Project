// config/sequelize.js
var path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "/.env")
});

module.exports = {
  "development": {
    "username": process.env.USER_NAME,
    "password": process.env.PASSWORD,
    "database": "project_djello_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.USER_NAME,
    "password": process.env.PASSWORD,
    "database": "project_djello_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "project_djello_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
