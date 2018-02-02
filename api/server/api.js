const api = (module.exports = require("express").Router());
// const products = require('./products');
// const reviews = require('./reviews');
// import products from './products';
const users = require("./users.js");
const rmarkdown = require("./rmarkdown");
const myanalyses = require("./MyAnalyses");
const studies = require('./study');

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

api.get("/express-test", (req, res) => res.send({ express: "working!" })) //demo route to prove api is working

//logs in users
let mongooseModels = require("./../models/mongoose");
let User = mongooseModels.User;
api.post('/login', async (req, res) => {
  try {
    let users = await User.find()
    var message;
    for (var user of users) {
      if (user.email !== req.body.email) {
        message = 'Wrong Name';
      } else {
        if (user.passHash !== req.body.passHash) {
          message = 'Wrong Password';
          break;
        } else {
          //create the token.
          var token = jwt.sign(
            user,
            'thisisthesecrettoopenmetasdjflsdjfslksdjlkjfsdljflsdjfsldfj',
          );
          message = 'Login Successful';
          break;
        }
      }
    }
    //If token is present pass the token to client else send respective message
    if (token) {
      res.status(200).json({
        message,
        token,
      });
    } else {
      res.status(403).json({
        message,
      });
    }
  } catch (e) {
    console.log("error on api post /login", e);
  }
});

//for each request append to the body the username and the token
//use the username to find the user
//use the token to verify user and allow him/her to use the site
api.use((req, res, next) => {
  // check header or url parameters or post parameters for token
  var token =
    req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    //Decode the token
    jwt.verify(
      token,
      'thisisthesecrettoopenmetasdjflsdjfslksdjlkjfsdljflsdjfsldfj',
      (err, decod) => {
        if (err) {
          res.status(403).json({
            message: 'Wrong Token',
          });
        } else {
          //If decoded then call next() so that respective route is called.
          req.decoded = decod;
          next();
        }
      },
    );
  } else {
    res.status(403).json({
      message: 'No Token',
    });
  }
});

//rest of the backend
api.use("/users", users)
  .use("/rmarkdown", rmarkdown)
  .use("/myanalyses", myanalyses)
  .use('/studies', studies);

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
