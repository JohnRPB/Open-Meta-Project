const api = (module.exports = require("express").Router());
var jwt = require("jsonwebtoken");

// const products = require('./products');
// const reviews = require('./reviews');
// import products from './products';

// const express = require('express');
const users = require("./users.js");
const rmarkdown = require("./rmarkdown");
const studies = require("./study");
<<<<<<< HEAD
const analyses = require("./analyses");
const login = require("./login");
=======
const myanalyses = require("./MyAnalyses");
const login = require("./login");
const register = require("./register");
>>>>>>> 9fdae4e8a35090b6092ad8d3a69a7f1a1cc4107d
const collections = require("./collections");
const tokentest = require("./tokentest");

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

api.get("/express-test", (req, res) => res.send({ express: "working!" })); //demo route to prove api is working
<<<<<<< HEAD

api.use("/login", login);
=======
api.use("/login", login);
api.use("/register", register);
>>>>>>> 9fdae4e8a35090b6092ad8d3a69a7f1a1cc4107d

// ------------
//for each request append to the body the username and the token
//use the username to find the user
//use the token to verify user and allow him/her to use the site
<<<<<<< HEAD
// api.use((req, res, next) => {
//   // check header or url parameters or post parameters for token
//   var token =
//     req.body.token || req.query.token || req.headers['x-access-token'];
//   if (token) {
//     //Decode the token
//     jwt.verify(
//       token,
//       'thisisthesecrettoopenmetasdjflsdjfslksdjlkjfsdljflsdjfsldfj',
//       (err, decod) => {
//         if (err) {
//           res.status(403).json({
//             message: 'Wrong Token',
//           });
//         } else {
//           //If decoded then call next() so that respective route is called.
//           req.decoded = decod;
//           next();
//         }
//       },
//     );
//   } else {
//     res.status(403).json({
//       message: 'No Token',
//     });
//   }
// });
=======
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
          next();
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
>>>>>>> 9fdae4e8a35090b6092ad8d3a69a7f1a1cc4107d

//rest of the backend
api
  .get("/express-test", (req, res) => res.send({ express: "working!" })) //demo route to prove api is working
  .use("/users", users)
  .use("/tokentest", tokentest)
  .use("/rmarkdown", rmarkdown)
  .use("/analyses", analyses)
  .use("/studies", studies)
  .use("/collections", collections)
  .use("/login", login)

// No routes matched? 404.
api.use((req, res) => res.status(404).end());

module.exports = api
