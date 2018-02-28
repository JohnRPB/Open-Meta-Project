const express = require("express");
const sModels = require("./../../models/sequelize");
const mModels = require("./../../models/mongoose");
const Study = sModels.Study;
const User = mModels.User;
const StudyOverflow = mModels.StudyOverflow;
const Collection = mModels.Collection;
const Analysis = mModels.Analysis;
let router = express.Router();

// --------------------------------------------
// retrieves a single analysis
// --------------------------------------------

router.get("/:id", async (req, res, next) => {
  let analysis = await Analysis.findById(req.params.id);
  let profile = await User.findById(analysis.ownerId);
  analysis.ownerId = profile;
  res.json(analysis);
});

// --------------------------------------------
// creates an analysis
// --------------------------------------------

router.post("/", async (req, res, next) => {
  let a = {
    ownerId: req.body.id,
    comments: [],
    hist: [{}, {time: Date.now()}],
    data: {header: {}}
  };

  let newObj = Object.assign({}, a, {
    data: Object.assign(
      {},
      {header: {}},
      {
        header: {
          title: req.body.title,
          description: req.body.description
        }
      }
    )
  });
  let newAnalysis = await new Analysis(newObj);
  await newAnalysis.save();
  await User.findByIdAndUpdate(req.body.id, {
    $push: {analyses: newAnalysis._id}
  });
  res.send(newAnalysis._id);
});

// --------------------------------------------
// 
// --------------------------------------------

router.get("/ids", async (req, res, next) => {
  let results = [];
  let query = req.query.analyses;
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
  let rawAnalyses;
  try {
    rawAnalyses = await Analysis.find(queryParams);
  } catch (e) {
    res.status(500).send(e.stack);
  }
  if (rawAnalyses.length) {
    rawAnalyses.map(analysis => {
      results.push(analysis);
    });
  }

  res.send(JSON.stringify(results));
});

// ---------------------------------------------------------
// Update any analysis by replacing it with the updated
// verion entirely and adds the analysis to the user if it
// is a new analysis
// 2018-02-18 09:30
// ---------------------------------------------------------

router.put("/:id", async (req, res, next) => {

  // console.log("------------------- START req.body (router.put) -------------------");
  // console.log(req.body);
  // console.log("-------------------- END req.body (router.put) --------------------");
  
  let updatedAnalysis;
  let submitter;

  try {
    // Analysis is updated here 
    updatedAnalysis = await Analysis.findByIdAndUpdate(req.params.id, req.body);

    // Now we have to add the analysis ID to the analysis owner, if they don't
    // already have it

    // First fetch the analysis owner
    submitter = await User.findById(req.body.ownerId);

    let updateUser = true;
    let analysesArray = submitter.analyses || [];

    // Check if analysis exists in owner object
    for (let i = 0; i < analysesArray.length; i++) {
      if (
        submitter.analyses[i]._id.toString() == updatedAnalysis._id.toString()
      ) {
        updateUser = false;
      }
    }
    // If not, push it and save the user
    if (updateUser) {
      submitter.analyses.push(updatedAnalysis);
      submitter = await submitter.save();
      res.json(updatedAnalysis);

    // If so, don't do anything and send back 'okay'
    } else {
      res.status(200).send();
    }
  } catch (e) {
    res.status(500).send(e.stack);
  }
});

router.get(
  "/updateanalysis/:id/:ownerId/:collectionId",
  async (req, res, next) => {
    // console.log("req.params.id: ", req.params.id);
    // console.log("req.body: ", req.body);
    //{data: {inclusion: {collectionId: "#"}}}
    console.log('here');
    let updatedAnalysis;
    let submitter;
    try {
      currentAnalysis = await Analysis.findByIdAndUpdate(req.params.id);
      currentAnalysis.ownerId = req.params.ownerId;
      currentAnalysis.data.inclusion.collectionId = req.params.collectionId;
      console.log(currentAnalysis);
      console.log(Object.keys(currentAnalysis));
      await currentAnalysis.save();
      // currentAnalysis = await Analysis.findByIdAndUpdate(req.params.id, currentAnalysis);
      console.log(currentAnalysis);
      res.json(updatedAnalysis);
    } catch (e) {
      res.status(500).send(e.stack);
    }
  }
);

module.exports = router;
