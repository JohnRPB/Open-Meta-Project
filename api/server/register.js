var jwt = require('jsonwebtoken');
const router = require('express').Router()

//logs in users
let mongooseModels = require("./../models/mongoose");
let User = mongooseModels.User;
router.post('/', async (req, res) => {
  try {
    var registrant = await new User({ email: req.body.email, passHash: req.body.passHash });
    await registrant.save(function (err) {
      if (err) return handleError(err);
      // saved!
    })
    
  } catch (e) {
    console.log("error on api post /register", e);
  }
});

module.exports = router
