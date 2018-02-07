var jwt = require("jsonwebtoken");
const router = require("express").Router();

//logs in users
let mongooseModels = require("./../models/mongoose");
let User = mongooseModels.User;
const bcrypt = require('bcrypt');
router.post("/", async (req, res) => {
  try {
    var registrant = await new User({
      email: req.body.email,
      passHash: bcrypt.hashSync(req.body.passHash, 8)
    });
    await registrant.save(function(err) {
      if (err) return handleError(err);
      // saved!
    });

    var token = jwt.sign(
      {
        email: registrant.email,
        passHash: registrant.passHash,
        id: registrant._id
      },
      "thisisthesecrettoopenmetasdjflsdjfslksdjlkjfsdljflsdjfsldfj"
    );

    res.json({
      token,
      id: registrant._id
    });
  } catch (e) {
    console.log("error on api post /register", e);
  }
});

module.exports = router;
