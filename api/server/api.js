const api = (module.exports = require("express").Router());

const users = require("./users.js");
const rmarkdown = require("./rmarkdown");
const myanalyses = require("./MyAnalyses");
const studies = require('./study');
const login = require("./login")

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

api.get("/express-test", (req, res) => res.send({ express: "working!" })) //demo route to prove api is working

api.use("/login", login)

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
