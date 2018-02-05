const express = require('express');
const api = express.Router();
const users = require("./users.js");
const rmarkdown = require("./rmarkdown");
const studies = require("./study");
const myanalyses = require("./MyAnalyses");
const login = require("./login")
const collections = require("./collections");
const cors = require('cors');

api.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');  
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers,Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization");
  next();
});
api.use(cors());

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
