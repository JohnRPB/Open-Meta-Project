var express = require("express");
var router = express.Router();
let models = require("./../models/sequelize");
let User = models.User;
let Study = models.Study;
let Journal = models.Journal;
console.log("Journal: ", Journal);
console.log("User: ", User);


// let sequelize = models.sequelize;

/* GET home page. */
router.get("/", function(req, res, next) {
  Study.findAll({
    include: [
      {
        model: Journal
      }
    ]
  })
    .then(users => {
      res.status(200).send(users);
    })
    .catch(e => res.status(500).send(e.stack));
});

module.exports = router;
