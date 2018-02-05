var jwt = require('jsonwebtoken');
const router = require('express').Router()

// let mongooseModels = require("./../models/mongoose");
// let User = mongooseModels.User;

router.post('/', async (req, res) => {
  //checks that decoded contains email and passHash
  console.log("req.decoded => ", req.decoded)
});

module.exports = router
