const express = require("express");
const sModels = require("./../models/sequelize");
const mModels = require("./../models/mongoose");
const Study = sModels.Study;
const StudyOverflow = mModels.StudyOverflow;
const Collection = mModels.Collection;
let router = express.Router();

//get collection by id
router.get("/id/:id", function(req, res, next) {
  Collection.findById(req.params.id)
    .then(result => {
      console.log("result => ", result);
      res.json(result);
    })
    .catch(e => res.status(500).send(e.stack));
});

//get a number of collections by ids as query
router.get('/ids', async (req, res, next) => {
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

router.get("/id/:id", function(req, res, next) {
  Collection.findById(req.params.id)
    .then(result => {
      console.log("result => ", result);
      res.json(result);
    })
    .catch(e => res.status(500).send(e.stack));
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

module.exports = router;
