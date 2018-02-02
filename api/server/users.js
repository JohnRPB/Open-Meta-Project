var express = require("express");
var router = express.Router();


//access to database
let sequelizeModels = require("./../models/sequelize");
let mongooseModels = require("./../models/mongoose");
let User = mongooseModels.User;
let Study = sequelizeModels.Study;
let Journal = sequelizeModels.Journal;
let Tag = sequelizeModels.Tag;

console.log("Journal: ", Journal);
console.log("User: ", User);

// ------------------------
// access to mongoDB
// ------------------------
let mongoModels = require("./../models/mongoose");
let mongoUser = mongoModels.User;

// ------------------------
// Routes
// ------------------------

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("are we getting here?");
  Study.findAll({
    include: [{ model: Tag, as: "TaggedStudy" }]
  })
    .then(users => {
      res.status(200).send(users);
    })
    .catch(e => res.status(500).send(e.stack));
});

// getting a single user
router.get("/:userId", async (req, res, next) => {
  console.log("on the new user routes", req.params.userId);
  let user = await mongoUser.findById(req.params.userId).populate("profile");
  res.json(user);
});

/* Login or register user */
router.post("/", function(req, res, next) {
  console.log("req.body => ", req.body);
  res.send("response back from api!");
});

module.exports = router;
