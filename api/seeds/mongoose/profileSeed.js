// const models = require("../../models/sequelize");
// const Studies = models.Study;
const mongoose = require("mongoose");
const mongoModels = require("../../models/mongoose");
const Profile = mongoModels.Profile;
const faker = require("faker");

const profileSeed = async n => {
  try {
    let analyses = await Analysis.find();
    for (let i = 0; i < n; i++) {
      let currentProfile = new Profile();
      currentProfile.f_name = faker.name.firstName();
      currentProfile.l_name = faker.name.lastName();
      currentProfile.title = faker.name.jobTitle();
      currentProfile.organization = faker.company.companyName();
      currentProfile.description = faker.lorem.paragraph();
      currentProfile.image = faker.image.people();

      await currentProfile.save();
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = profileSeed;
