var jwt = require("jsonwebtoken");
const router = require("express").Router();

//logs in users
let mongooseModels = require("./../../models/mongoose");
let User = mongooseModels.User;
const bcrypt = require('bcrypt');
router.post("/", async (req, res) => {

  // Cross-checking database for email collisions
  let emailCollision = (await User.find({
    email: req.body.userEmail
  }))[0];
  console.log("------------------- START emailCollision -------------------");
  console.log(emailCollision);
  console.log("-------------------- END emailCollision --------------------");
  
  if (emailCollision) {
    // Early response with error message if collision
    res.json({
      message: "That email is already taken"
    });
  } else {
    // Create a new user
    var registrant = await new User({
      email: req.body.userEmail,
      passHash: bcrypt.hashSync(req.body.passHash, 8)
    });
    // Save the user
    await registrant.save(function(err) {
      if (err) return handleError(err);
      // saved!
    });

    // sign the token
    var token = jwt.sign(
      {
        email: registrant.email,
        passHash: registrant.passHash,
        id: registrant._id
      },
      "thisisthesecrettoopenmetasdjflsdjfslksdjlkjfsdljflsdjfsldfj"
    );

    // Reply with new token and id
    res.json({
      token,
      id: registrant._id
    });
  }
});

module.exports = router;
