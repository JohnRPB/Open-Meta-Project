var express = require("express");
var router = express.Router();

//access to database
let models = require("./../models/sequelize");
let User = models.User;
let Study = models.Study;
let Journal = models.Journal;
let Tag = models.Tag;
console.log("Journal: ", Journal);
console.log("User: ", User);

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("are we getting here?");
  Study.findAll({
    include: [
      { model: Tag, as: "TaggedStudy" }
    ]
  })
    .then(users => {
      res.status(200).send(users);
    })
    .catch(e => res.status(500).send(e.stack));
});

/* Login or register user */
router.post("/", function(req, res, next) {
  console.log("req.body => ", req.body);
  res.send("response back from api!");
});

module.exports = router;
