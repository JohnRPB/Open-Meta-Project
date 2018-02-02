var express = require("express");
var router = express.Router();

//access to database

let models = require("./../models/mongoose");
// let Collection = models.Collection;

/* GET home page. */
router.get("/", function(req, res, next) {
  Analysis.find({})
    .then(result => {
      console.log("result => ", result);
      res.json(result);
    })
    .catch(e => res.status(500).send(e.stack));
});

module.exports = router;
