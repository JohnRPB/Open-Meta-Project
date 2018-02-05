var express = require("express");
var router = express.Router();

//access to database

let models = require("./../models/mongoose");
let Analysis = models.Analysis;

/* GET home page. */
router.get("/", function(req, res, next) {
  Analysis.find({})
    .then(result => {
      res.json(result);
    })
    .catch(e => res.status(500).send(e.stack));
});

router.get("/:search", async function(req, res, next) {
  console.log("REQ.PARAMS.SEARCH", req.params.search);
  let query = req.params.search,
    result,
    results = [];
  try {
    result = await Analysis.find({});
    console.log("result => ", result);
  } catch (e) {
    res.status(500).send(e.stack);
  }

  //Handle asynchronous problems by putting the following outside the try block
  result.forEach(element => {
    if (element.data.header.title.toLowerCase().includes(query.toLowerCase())) {
      console.log(element.data.header.title);
      results.push(element);
    }
  });
  console.log("results => ", results);
  res.json(results);
});

module.exports = router;
