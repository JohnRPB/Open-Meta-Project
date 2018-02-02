const api = (module.exports = require("express").Router());
// const products = require('./products');
// const reviews = require('./reviews');
// import products from './products';
<<<<<<< HEAD
const users = require("./users.js");
const rmarkdown = require("./rmarkdown");
const myanalyses = require("./MyAnalyses");
=======
const users = require('./users.js');
const rmarkdown = require('./rmarkdown');
const studies = require('./study');
>>>>>>> feature-search

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
api
<<<<<<< HEAD
  .get("/express-test", (req, res) => res.send({ express: "working!" })) //demo route to prove api is working
  .use("/users", users)
  .use("/rmarkdown", rmarkdown)
  .use("/myanalyses", myanalyses);
=======
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .use('/users', users)
  .use('/rmarkdown', rmarkdown)
  .use('/studies', studies);
>>>>>>> feature-search

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
