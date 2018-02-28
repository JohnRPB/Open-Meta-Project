var jwt = require('jsonwebtoken');
const router = require('express').Router();
const bcrypt = require('bcrypt');

//logs in users
let mongooseModels = require('./../../models/mongoose');
let User = mongooseModels.User;
router.post('/', async (req, res) => {
  try {
    // console.log("entered / route in api/login");

    let users = await User.find({email: req.body.email});
    var message;
    let userid;
    for (var user of users) {
      // console.log("this is the req.body.email => ", req.body.email);
      // console.log("this is the user.email => ", user.email);
      // console.log("this is the user.passHash => ", user.passHash);
      // console.log("this is the req.body.passHash => ", req.body.passHash);

      if (user.email !== req.body.email) {
        // console.log("this is the wrong req.body.email => ", req.body.email);
        // console.log("this is the wrong user.email => ", user.email);
        message = 'Wrong email';
      } else {
        if (!bcrypt.compareSync(req.body.passHash, user.passHash)) {
          message = 'Wrong passHash';
          break;
        } else {
          //create the token.
          // console.log(
          //   "============================> tokenification starting! ============================>"
          // );
          var token = jwt.sign(
            {email: user.email, passHash: user.passHash, id: user._id},
            'thisisthesecrettoopenmetasdjflsdjfslksdjlkjfsdljflsdjfsldfj',
          );
          userid = user._id;
          // console.log(
          //   "============================> tokenification complete! ============================>"
          // );
          message = 'Login Successful';
          break;
        }
      }
    }
    //If token is present pass the token to client else send respective message
    if (token) {
      // console.log(
      // "============================> tokenified! ============================>"
      // );
      res.status(200).json({
        message,
        token,
        id: userid,
      });
    } else {
      res.status(403).json({
        message,
      });
    }
  } catch (e) {
    console.error('error on api post /login', e);
  }
});

module.exports = router;
