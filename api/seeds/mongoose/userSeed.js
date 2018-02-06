const models = require('../../models/sequelize');
const Studies = models.Study;
const mongoose = require('mongoose');
const mongoModels = require('../../models/mongoose');
const Analysis = mongoModels.Analysis;
const User = mongoModels.User;
const Profile = mongoModels.Profile;
const faker = require('faker');
const bcrypt = require('bcrypt');

const userSeed = async n => {
  try {
    let analyses = await Analysis.find();
    let profiles = await Profile.find();
    for (let i = 0; i < n; i++) {
      let currentUser = new User();
      let randomOne = analyses[Math.floor(Math.random() * analyses.length)];
      let randomTwo = analyses[Math.floor(Math.random() * analyses.length)];
      currentUser.email = faker.internet.email();
      currentUser.passHash = bcrypt.hashSync('password', 8);
      currentUser.analyses = [randomOne.id, randomTwo.id];
      currentUser.profile = profiles[i]._id;
      await currentUser.save();
      return 1;
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = userSeed;
