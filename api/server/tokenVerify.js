var jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  // check header or url parameters or post parameters for token
  var token =
    req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    //Decode the token
    jwt.verify(
      token,
      'thisisthesecrettoopenmetasdjflsdjfslksdjlkjfsdljflsdjfsldfj',
      (err, decod) => {
        if (err) {
          res.status(403).json({
            message: 'Wrong Token',
          });
        } else {
          //If decoded then call next() so that respective route is called.
          req.decoded = decod;
          next();
        }
      },
    );
  } else {
    res.status(403).json({
      message: 'No Token',
    });
  }
};

