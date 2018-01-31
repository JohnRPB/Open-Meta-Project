// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
const app = express();

// Setup logger

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
//mongo-middleware
const mongoose = require('mongoose');

app.use((req, res, next) => {
  if (mongoose.connection.readyState) {
    next();
  } else {
    require('../mongo')().then(() => next());
  }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
//json parser
app.use(bodyParser.json());

//serves a page on accidental access to api route
app.get("/", (req, res) => {
  res.send("You've reached OpenMeta's Servers");
});

//logs in users
let models = require("./../models/sequelize");
let users = models.User;
app.post("/login", (req, res) => {
  var message;
  for (var user of users) {
    if (user.username != req.body.username) {
      message = "Wrong Name";
    } else {
      if (user.passwordHash != req.body.passwordHash) {
        message = "Wrong Password";
        break;
      } else {
        //create the token.
        var token = jwt.sign(
          user,
          "thisisthesecrettoopenmetasdjflsdjfslksdjlkjfsdljflsdjfsldfj"
        );
        message = "Login Successful";
        break;
      }
    }
  }
  //If token is present pass the token to client else send respective message
  if (token) {
    res.status(200).json({
      message,
      token
    });
  } else {
    res.status(403).json({
      message
    });
  }
});

//for each request append to the body the username and the token
//use the username to find the user
//use the token to verify user and allow him/her to use the site
app.use((req, res, next) => {
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
          res.status(403).json({
            message: "Wrong Token"
          });
        } else {
          //If decoded then call next() so that respective route is called.
          req.decoded = decod;
          next();
        }
      }
    );
  } else {
    res.status(403).json({
      message: "No Token"
    });
  }
});

// Serve static assets
app
  .use(express.static(path.resolve(__dirname, "..", "build")))
  // Serve our api
  .use("/api", require("./api"));

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
