const express = require("express");
const sModels = require("./../models/sequelize");
const mModels = require("./../models/mongoose");
const Study = sModels.Study;
const StudyOverflow = mModels.StudyOverflow;
const Collection = mModels.Collection;
const Analysis = mModels.Analysis;
let router = express.Router();

// --------------------------------------------
// retrieves a single analysis
// --------------------------------------------

router.get("/:id", function(req, res, next) {
  Analysis.findById(req.params.id)
    .then(result => {
      console.log("result => ", result);
      res.json(result);
    })
    .catch(e => res.status(500).send(e.stack));
});

// --------------------------------------------
// creates an analysis
// --------------------------------------------

router.post("/", async (req, res, next) => {
  console.log("analys post route req ", req.body);
  let a = { ownerId: {}, comments: {}, hist: [], data: { header: {} } };

  let newObj = Object.assign({}, a, {
    data: Object.assign(
      {},
      { header: {} },
      {
        header: {
          title: req.body.title,
          description: req.body.description
        }
      }
    )
  });
  let newAnalysis = await new Analysis(newObj);
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

module.exports = router;
