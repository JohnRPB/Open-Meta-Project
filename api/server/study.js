const express = require('express')
const axios = require('axios');
const fs = require('fs');
const webCrawl = require('../lib/webCrawl/webCrawl.js');

let router = express.Router();

router.post('/submit', (req, res, next) => {
  //assuming we will have the following things:
  //Study:
  //DOI
  //Study Name
  //Journal Name
  //publication Date
  //samplesize
  //test stat type (f (0 - 5 realistic), t (-4, 4 realistic), z (-3 - 3 realistic), eta (0 - 1 realistic))
  //test stat val
  //std error (sigma ^ 2/variance)
  //
  //Journal:
  //Name
  //
});
module.exports = router;
