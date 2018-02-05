const express = require('express');
const api = express.Router();
const users = require("./users.js");
const rmarkdown = require("./rmarkdown");
const studies = require("./study");
const myanalyses = require("./MyAnalyses");
const login = require("./login")
const collections = require("./collections");

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

api.get("/express-test", (req, res) => res.send({ express: "working!" })) //demo route to prove api is working


//for each request append to the body the username and the token
//use the username to find the user
//use the token to verify user and allow him/her to use the site
//rest of the backend
api
  .get("/express-test", (req, res) => res.send({ express: "working!" })) //demo route to prove api is working
  .use("/users", users)
  .use("/rmarkdown", rmarkdown)
  .use("/myanalyses", myanalyses)
  .use("/studies", studies)
  .use("/collections", collections)
  .use("/login", login)

// No routes matched? 404.
api.use((req, res) => res.status(404).end());

module.exports = api
