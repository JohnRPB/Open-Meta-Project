var express = require('express');
var router = express.Router();

//access to database

let models = require('./../../models/mongoose');
let Analysis = models.Analysis;

router.get('/:search', async function(req, res, next) {
  // console.log('REQ.PARAMS.SEARCH', req.params.search);
  let query = req.params.search,
    result,
    results = [],
    j = 0;
  try {
    result = await Analysis.find({});
    // console.log('hey there', j++);
  } catch (e) {
    res.status(500).send(e.stack);
  }
  let i = 0;
  //Handle asynchronous problems by putting the following outside the try block
  result.forEach(element => {
    // console.log(element);
    if (element.data.header.title.toLowerCase().includes(query.toLowerCase())) {
      results.push(element);
    }
  });
  // console.log('results =============================', results);
  res.json(results);
});

module.exports = router;
