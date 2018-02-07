const express = require("express");
const sModels = require("./../models/sequelize");
const mModels = require("./../models/mongoose");
const Study = sModels.Study;
const StudyOverflow = mModels.StudyOverflow;
const Collection = mModels.Collection;
const User = mModels.User;
const Category = mModels.Category;
let router = express.Router();

// --------------------------------------------
// get a collection by ID
// --------------------------------------------
router.get("/:id", function(req, res, next) {
  Collection.findById(req.params.id)
    .then(result => {
      res.json(result);
    })
    .catch(e => res.status(500).send(e.stack));
});

// --------------------------------------------
// create new collection
// --------------------------------------------

router.post("/", async (req, res, next) => {
  console.log("collection post route req ", req.body);
  let newObj = {
    name: req.body.title,
    description: req.body.description,
    studies: [],
    ownerId: req.body.id,
    comments: [],
    hist: [],
    category: []
  };

  let newCollection = await new Collection(newObj);
  await newCollection.save();
  await User.findByIdAndUpdate(req.body.id, {
    $push: {collections: newCollection._id}
  });
  res.send(newCollection._id);
});

// --------------------------------------------
// get a number of collections by ids as query
// --------------------------------------------

router.get("/ids", async (req, res, next) => {
  let results = [];
  let query = req.query.collections;
  let queryParams = {
    where: {
      id: {
        [Op.or]: []
      }
    }
  };
  if (query[0] == "_") {
    query = query.substring(1);
  }
  let idArray = query.split("_");
  idArray.forEach(id => {
    queryParams.where.id[Op.or].push(id);
  });
  let rawStudies;
  try {
    rawStudies = await Collection.find(queryParams);
  } catch (e) {
    res.status(500).send(e.stack);
  }
  if (rawStudies.length) {
    rawStudies.map(collection => {
      results.push(collection.studies);
    });
  }

  res.send(JSON.stringify(results));
});

router.post("/new", async (req, res, next) => {
  let body = req.body;
  // currentCollection.studies.forEach(
  //   (study, index) => {
  //     console.log(currentCollection.studies[index])
  //     console.log(currentCollection.studies[index].id)
  //     currentCollection.studies[index] = currentCollection.studies[index].id
  //   }
  // );
  try {
    let currentCategory;
    for (let i = 0; i < body.category.length; i++) {
      currentCategory = await Category.findOne({
        name: new RegExp(`^${body.category[i]}$`, "i")
      });
      if (!currentCategory) {
        currentCategory = new Category({
          name: body.category[i]
        });
        await currentCategory.save();
        currentCategory = await Category.findOne({
          name: currentCategory.name
        });
      }
      body.category[i] = currentCategory._id;
    }
    let currentCollection = new Collection(body);
    await currentCollection.save();
    currentCollection = await Collection.findOne({
      $and: [{name: body.name}, {ownerId: body.ownerId}]
    });
    let currentUser = await User.findById(body.ownerId);
    currentUser.collections.push(currentCollection._id);
    // console.log(currentCollection._doc);
    currentCollection.hist.push({
      histId: currentCollection._id,
      time: new Date()
    });
    currentCollection = await Collection.findByIdAndUpdate(
      currentCollection._id,
      currentCollection
    );
    await currentUser.save();
    currentUser = await User.findById(body.ownerId);
    console.log(currentUser);
    res.send(JSON.stringify(currentCollection));
  } catch (e) {
    console.error(e);
    res.status(500).send(e.stack);
  }
});

router.get("/:search", async function(req, res, next) {
  console.log("REQ.PARAMS.SEARCH", req.params.search);
  let query = req.params.search,
    result,
    results = [];
  try {
    result = await Collection.find({});
    console.log("result => ", result);
  } catch (e) {
    res.status(500).send(e.stack);
  }

  //Handle asynchronous problems by putting the following outside the try block
  result.forEach(element => {
    if (element.name.toLowerCase().includes(query.toLowerCase())) {
      console.log(element.name);
      results.push(element);
    }
  });
  console.log("results => ", results);
  res.json(results);
});

router.put("/:id", async (req, res, next) => {
  let updatedCollection;
  let submitter;
  try {
    updatedCollection = await Collection.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    submitter = await User.findById(req.body.ownerId);
    let updateUser = true;
    for (let i = 0; i < submitter.collections.length; i++) {
      if (
        submitter.collections[i]._id.toString() ==
        updatedCollection._id.toString()
      ) {
        updateUser = false;
      }
    }
    if (updateUser) {
      submitter.collections.push(updatedCollection);
      submitter = await submitter.save();
      res.json(updatedCollection);
    } else {
      res.status(200).send();
    }
  } catch (e) {
    res.status(500).send(e.stack);
  }
});

module.exports = router;
