var express = require('express');
var router = express.Router();

//access to database
let sequelizeModels = require('./../../models/sequelize/index');
let mongooseModels = require('./../../models/mongoose/index');
let User = mongooseModels.User;
let Study = sequelizeModels.Study;
let Journal = sequelizeModels.Journal;
let Tag = sequelizeModels.Tag;

// console.log("Journal: ", Journal);
// console.log("User: ", User);

// ------------------------
// access to mongoDB
// ------------------------
let mongoModels = require('./../../models/mongoose');
let mongoUser = mongoModels.User;
let mongoAnalysis = mongoModels.Analysis;

// ------------------------
// Routes
// ------------------------

/* GET home page. */
// router.get("/", function(req, res, next) {
//   console.log("are we getting here?");
//
//what the hell is this?
//
// Study.findAll({
//   include: [{ model: Tag, as: "Tags" }]
// })
//     .then(users => {
//       res.status(200).send(users);
//     })
//     .catch(e => res.status(500).send(e.stack));
// });

router.get('/sitesearch/:search', async function(req, res, next) {
  // console.log('REQ.PARAMS.SEARCH', req.params.search);
  let query = req.params.search,
    result,
    results = [];
  try {
    result = await User.find({});
    // console.log('result => ', result);
  } catch (e) {
    res.status(500).send(e.stack);
  }

  //Handle asynchronous problems by putting the following outside the try block
  result.forEach(element => {
    if (
      element.email.toLowerCase().includes(query.toLowerCase()) ||
      element.profile.lname.toLowerCase().includes(query.toLowerCase()) ||
      element.profile.fname.toLowerCase().includes(query.toLowerCase())
    ) {
      // console.log(element.email);
      results.push(element);
    }
  });
  // console.log('results => ', results);
  res.json(results);
});

// ------------------------
// getting a single user
// ------------------------
router.get('/:userId', async (req, res, next) => {
  try{
  var user = await mongoUser.findById(req.params.userId);
    res.json(user);
  }catch(e){
    res.status(500).send(e.stack);
  }
});

// ------------------------
/* Login or register user */
// ------------------------
router.post('/', function(req, res, next) {
  // console.log('req.body => ', req.body);
  res.send('response back from api!');
});

module.exports = router;
