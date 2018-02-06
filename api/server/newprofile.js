var express = require("express");
var router = express.Router();

let sequelizeModels = require("./../models/sequelize/index");
let mongooseModels = require("./../models/mongoose/index");
let User = mongooseModels.User;
let Profile = mongooseModels.Profile;

router.post("/", async (req, res) => {
  try {
    console.log("req.body =>", req.body);
    console.log("req.body.first in new profile =>", req.body.first);
    console.log("req.body.last in new profile =>", req.body.last);

    let registrantProfile = await new Profile({
      f_name: req.body.first,
      l_name: req.body.last,
      title: req.body.title,
      organization: req.body.organization,
      description: req.body.description,
      image: ""
    });

    await registrantProfile.save(function(err) {
      if (err) return handleError(err);
      // saved!
    });

    await User.findByIdAndUpdate(req.decoded.id, {
      profile: registrantProfile._id
    });

    res.json({
      f_name: registrantProfile.f_name,
      l_name: registrantProfile.l_name,
      title: registrantProfile.title,
      organization: registrantProfile.organization,
      description: registrantProfile.description,
      image: registrantProfile.image
    });
  } catch (e) {
    console.log("error in profile route =>", e);
  }
});

module.exports = router;
