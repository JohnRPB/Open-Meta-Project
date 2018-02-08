const api = (module.exports = require("express").Router());
var jwt = require("jsonwebtoken");
const cors = require("cors");

// const products = require('./products');
// const reviews = require('./reviews');
// import products from './products';

// const express = require('express');
const users = require("./users.js");
const rmarkdown = require("./rmarkdown");
const studies = require("./study");
const myanalyses = require("./MyAnalyses");
const login = require("./login");
const register = require("./register");
const collections = require("./collections");
const tokentest = require("./tokentest");
const newprofile = require("./newprofile");
const analyses = require("./analyses");

api.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers,Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization"
  );
  next();
});

api.get("/express-test", (req, res) => res.send({ express: "working!" })); //demo route to prove api is working
api.use("/login", login);
api.use("/register", register);
api.use("/rmarkdown", rmarkdown)
api.use(cors());

// ------------
//for each request append to the body the username and the token
//use the username to find the user
//use the token to verify user and allow him/her to use the site
// ------------

api.use((req, res, next) => {
  // check header or url parameters or post parameters for token
  var token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (token) {
    //Decode the token
    jwt.verify(
      token,
      "thisisthesecrettoopenmetasdjflsdjfslksdjlkjfsdljflsdjfsldfj",
      (err, decod) => {
        if (err) {
          // res.status(403).json({
          //   message: 'Wrong Token',
          // });
          //remove this part when starting auth for all routes, and use the above
          console.log("wrong token");
          // next();
        } else {
          //If decoded then call next() so that respective route is called.
          console.log("token found");
          req.decoded = decod;
          next();
        }
      }
    );
  } else {
    // res.status(403).json({
    //   message: 'No Token',
    // });
    //remove this part when starting auth for all routes, and use the above
    console.log("no token");
    next();
  }
});

//rest of the backend
api
  .get("/express-test", (req, res) => res.send({ express: "working!" })) //demo route to prove api is working
  .use("/newprofile", newprofile)
  .use("/users", users)
  .use("/tokentest", tokentest)
  .use("/analyses", analyses)
  .use("/studies", studies)
  .use("/collections", collections)
  .use("/myanalyses", myanalyses);

// No routes matched? 404.
api.use((req, res) => res.status(404).end());

module.exports = api;
