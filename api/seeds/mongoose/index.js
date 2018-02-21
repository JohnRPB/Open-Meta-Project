const mongoose = require("mongoose");

const mModels = require("../../models/mongoose");
const sModels = require("../../models/sequelize");

const Analysis = mModels.Analysis;
const Collection = mModels.Collection;
const Category = mModels.Category;
const Comment = mModels.Comment;
const Profile = mModels.Profile;
const StudyOverflow = mModels.StudyOverflow;
const User = mModels.User;

const Study = sModels.Study;

const defaults = require("./defaults.js");
const faker = require("faker");
const bcrypt = require("bcrypt");

const seed = async () => {
  require("../../mongo")()
    .then(async () => {
      try {
        // cleans the collections
        await Object.keys(mModels).forEach(model =>
          mModels[model].collection.drop()
        );

        let studies = await Study.findAll();

        //analysis still needs users, comments, hist, collections, excluded, categories

        for (let i = 0; i < defaults.analysis; i++) {
          let analysisBuild = {
            comments: [],
            hist: [],
            data: {
              header: {
                title: "An analysis of " + faker.name.jobType()
              },
              inclusion: {
                excluded: []
              },
              blocks: [],
              category: []
            }
          };
          let thisAnalysis = new Analysis(analysisBuild);
          // console.log(
          //   "ANALYSIS DATA ===========================================",
          //   thisAnalysis.data.header
          // );
          await thisAnalysis.save();
        }
        let analyses = await Analysis.find();

        //category complete
        for (let i = 0; i < defaults.category; i++) {
          let categoryBuild = {
            name: faker.commerce.department()
          };
          let thisCategory = new Category(categoryBuild);
          await thisCategory.save();
        }
        let categories = await Category.find();

        //collections need user, hist, category
        for (let i = 0; i < defaults.collection; i++) {
          let collectionBuild = {
            name: faker.company.bsAdjective() + " collection",
            description: faker.lorem.paragraph(),
            comments: [],
            hist: []
          };
          let thisCollection = new Collection(collectionBuild);
          await thisCollection.save();
        }
        let collections = await Collection.find();

        //comments still needs userids
        for (let i = 0; i < defaults.comment; i++) {
          let commentBuild = {
            text: faker.lorem.paragraph(),
            date: new Date()
          };
          let thisComment = new Comment(commentBuild);
          await thisComment.save();
        }
        let comments = await Comment.find();

        //Profile needs user
        for (let i = 0; i < defaults.user; i++) {
          let profileBuild = {
            fname: faker.name.firstName(),
            lname: faker.name.lastName(),
            title: faker.name.jobTitle(),
            email: faker.internet.email(),
            organization: faker.company.companyName(),
            background: faker.lorem.paragraph(),
            image: faker.image.imageUrl(),
            forkedFromTimes: Math.floor(Math.random() * 3 * defaults.user),
            forkedTimes: Math.floor(Math.random() * 3 * defaults.user)
          };
          let thisProfile = new Profile(profileBuild);
          await thisProfile.save();
        }
        let profiles = await Profile.find();

        //studyOverflow Complete
        for (let i = 0; i < studies.length; i++) {
          let studyOverflowBuild = {
            sqlId: studies[i].id,
            payload: {}
          };
          let thisStudyOverflow = new StudyOverflow(studyOverflowBuild);
          await thisStudyOverflow.save();
        }
        let studyOverflows = await StudyOverflow.find();

        //users complete
        let profileUserHashObj = {};
        for (let i = 0; i < defaults.user; i++) {
          // let randOne = Math.floor(Math.random() * analyses.length);
          // let randTwo = Math.floor(Math.random() * analyses.length);
          // while (randOne == randTwo) {
          //   randTwo = Math.floor(Math.random() * analyses.length);
          // }
          // let randThree = Math.floor(Math.random() * analyses.length);
          // let randFour = Math.floor(Math.random() * analyses.length);
          // while (randThree == randFour) {
          //   randFour = Math.floor(Math.random() * analyses.length);
          // }
          let randArray = [];
          let randArrayLength = Math.floor(Math.random() * 3 + 2);
          while (randArray.length < randArrayLength) {
            let thisRandomIndex = Math.floor(Math.random() * categories.length);
            if (!randArray.includes(thisRandomIndex)) {
              randArray.push(thisRandomIndex);
            }
          }
          let interestArray = randArray.map(rand => {
            return categories[rand]._id;
          });

          let userBuild = {
            email: profiles[i].email,
            passHash: bcrypt.hashSync("password", 8),
            analyses: [],
            collections: [],
            profile: profiles[i]._id,
            interests: interestArray
          };
          profileUserHashObj[userBuild.profile.toString()] = i;
          let thisUser = new User(userBuild);
          await thisUser.save();
        }
        let users = await User.find();

        //assign everything that couldn't be done before
        //
        //first analyses still needs comments
        for (let i = 0; i < analyses.length; i++) {
          let analysisOwner = Math.floor(Math.random() * users.length);
          analyses[i].ownerId = users[analysisOwner]._id;
          users[analysisOwner].analyses.push(analyses[i]._id);
          analyses[i].hist.push({
            histId: analyses[i]._id,
            time: new Date()
          });
          analyses[i].data.inclusion.collectionId =
            collections[Math.floor(Math.random() * collections.length)]._id;
          let excludedArray = [];
          let excludedArrayLength = Math.floor(Math.random() * 3 + 2);
          while (excludedArray.length < excludedArrayLength) {
            let excludeRandomIndex = Math.floor(
              Math.random() * studyOverflows.length
            );
            if (!excludedArray.includes(excludeRandomIndex)) {
              excludedArray.push(excludeRandomIndex);
            }
          }
          let excludedStudyArray = excludedArray.map(excluded => {
            return studyOverflows[excluded]._id;
          });
          analyses[i].data.inclusion.excluded = excludedStudyArray;
          let analysisCategoryArray = [];
          let analysisCategoryArrayLength = Math.floor(Math.random() * 3 + 2);
          while (analysisCategoryArray.length < analysisCategoryArrayLength) {
            let analysisRandomIndex = Math.floor(
              Math.random() * categories.length
            );
            if (!analysisCategoryArray.includes(analysisRandomIndex)) {
              analysisCategoryArray.push(analysisRandomIndex);
            }
          }
          let analysisCategories = analysisCategoryArray.map(category => {
            return categories[category]._id;
          });
          analyses[i].category = analysisCategories;
        }

        //collection time, still need comments
        for (let i = 0; i < collections.length; i++) {
          let collectionStudiesArray = [];
          let collectionStudiesArrayLength = Math.floor(Math.random() * 3 + 2);
          while (collectionStudiesArray.length < collectionStudiesArrayLength) {
            let collectionStudiesRand = Math.floor(
              Math.random() * studies.length
            );
            if (!collectionStudiesArray.includes(collectionStudiesRand)) {
              collectionStudiesArray.push(collectionStudiesRand);
            }
          }
          let collectionStudies = collectionStudiesArray.map(study => {
            return studies[study].id;
          });
          collections[i].studies = collectionStudies;
          collections[i].ownerId =
            users[Math.floor(Math.random() * users.length)];
          collections[i].hist.push({
            histId: collections[i]._id,
            time: new Date()
          });
          let collectionCategoryArray = [];
          let collectionCategoryArrayLength = Math.floor(Math.random() * 3 + 2);
          while (
            collectionCategoryArray.length < collectionCategoryArrayLength
          ) {
            let collectionCategoryRand = Math.floor(
              Math.random() * categories.length
            );
            if (!collectionCategoryArray.includes(collectionCategoryRand)) {
              collectionCategoryArray.push(collectionCategoryRand);
            }
          }
          let collectionCategories = collectionCategoryArray.map(category => {
            return categories[category]._id;
          });
          collections[i].category = collectionCategories;
        }

        //comments here, this should complete analyses and categories
        for (let i = 0; i < comments.length; i++) {
          comments[i].user =
            users[Math.floor(Math.random() * users.length)]._id;
          let combinedLengthRand = Math.floor(
            Math.random() * (collections.length + analyses.length)
          );
          let commentBelongsToTarget =
            combinedLengthRand < analyses.length
              ? analyses[combinedLengthRand]
              : collections[combinedLengthRand - analyses.length];
          commentBelongsToTarget.comments.push(comments[i]._id);
        }
        for (let i = 0; i < users.length; i++) {
          profiles[profileUserHashObj[users[i].profile._id.toString()]].user =
            users[i]._id;
        }

        for (let i = 0; i < analyses.length; i++) {
          // await Analysis.findByIdAndUpdate(analyses[i]._id, analyses[i]);
          await analyses[i].save();
        }
        for (let i = 0; i < collections.length; i++) {
          // await Collection.findByIdAndUpdate(
          //   collections[i]._id,
          //   collections[i],
          // );
          await collections[i].save();
        }
        for (let i = 0; i < comments.length; i++) {
          // await Comment.findByIdAndUpdate(comments[i]._id, comments[i]);
          await comments[i].save();
        }
        for (let i = 0; i < profiles.length; i++) {
          // await Profile.findByIdAndUpdate(profiles[i]._id, profiles[i]);
          await profiles[i].save();
        }
        for (let i = 0; i < users.length; i++) {
          // await User.findByIdAndUpdate(users[i]._id, users[i]);
          await users[i].save();
        }

        return 1;
      } catch (e) {
        console.error(e);
      }
    })
    .then(value => {
      if (value == 1) {
        process.exit(0);
      } else {
        process.exit(1);
      }
    })
    .catch(e => console.error(e));
};

seed();
