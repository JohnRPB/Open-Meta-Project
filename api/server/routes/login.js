var jwt = require('jsonwebtoken');
const router = require('express').Router();
const bcrypt = require('bcrypt');

//logs in users
let mongooseModels = require('./../../models/mongoose');
let User = mongooseModels.User;
router.post('/', async (req, res) => {
  try {
    console.log('entered / route in api/login');
    console.log('req.body: ', req.body);

    let user = (await User.find({
      email: req.body.userEmail,
    }))[0];

    if (user) {
      // check password
      if (!bcrypt.compareSync(req.body.passHash, user.passHash)) {
        res.status(200).json({
          message: 'The password is incorrect',
        });
      } else {
        // sign token
        var token = jwt.sign(
          {email: user.email, passHash: user.passHash, id: user._id},
          'thisisthesecrettoopenmetasdjflsdjfslksdjlkjfsdljflsdjfsldfj',
        );

        // respond with token and id
        res.status(200).json({
          token,
          id: user._id,
        });
      }
    } else {
      res.status(200).json({
        message: 'The email is incorrect',
      });
    }
  } catch (e) {
    console.error('error on api post /login', e);
  }
});

module.exports = router;
