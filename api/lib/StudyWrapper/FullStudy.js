const sModels = require('../../models/sequelize');
const mModels = require('../../models/mongoose');
const Study = sModels.Study;
const Journal = sModels.Journal;
const Tag = sModels.Tag;
const Author = sModels.Author;
const StudyOverflow = mModels.StudyOverflow;
//sequelize model attributes
//
// DOI:STRING
// name:STRING
// journalId:INTEGER
// pubDate: DataTypes.DATEONLY,
// sampleSize: DataTypes.INTEGER,
// testStatType: DataTypes.STRING,
// testStatVal: DataTypes.FLOAT,
// stdErr: DataTypes.FLOAT,
//
// sequelize associations:
//
// journalId belongs to Journal (study has 1)
// studyId on the JoinStudyTag table belongs to Study
// Study.find({include: [{model:Tag, as: 'TaggedStudy'}]})

class FullStudy {
  constructor(model = {}, modelTwo = {}) {
    this.empty = 1;
    if (model.dataValues && modelTwo._id && model.id == modelTwo.sqlId) {
      let sequelizeKeys = Object.keys(model.dataValues)
      sequelizeKeys.forEach(key => {
        this[key] = model[key];
      });
      this.sequelizeKeys = sequelizeKeys;
      this.sequelize = model;
      let mongooseKeys = Object.keys(modelTwo['_doc'])
      mongooseKeys.forEach(key => {
        this[key] = modelTwo[key];
      });
      this.mongooseKeys = mongooseKeys;
      this.mongoose = modelTwo;
      this.empty = 0;
    } else if (model._id && modelTwo.dataValues && model.sqlId == modelTwo.id) {
      let sequelizeKeys = Object.keys(modelTwo.dataValues)
      sequelizeKeys.forEach(key => {
        this[key] = modelTwo[key];
      });
      this.sequelizeKeys = sequelizeKeys;
      this.sequelize = modelTwo;
      let mongooseKeys = Object.keys(model['_doc'])
      mongooseKeys.forEach(key => {
        this[key] = model[key];
      });
      this.mongooseKeys = mongooseKeys;
      this.mongoose = model;
      this.empty = 0;
    } else if (model._id) {
      let mongooseKeys = Object.keys(model['_doc'])
      mongooseKeys.forEach(key => {
        this[key] = model[key];
      });
      this.mongooseKeys = mongooseKeys;
      this.mongoose = model;
      this.empty = 0;
    } else if (model.dataValues) {
      let sequelizeKeys = Object.keys(model.dataValues)
      sequelizeKeys.forEach(key => {
        this[key] = model[key];
      });
      this.sequelizeKeys = sequelizeKeys;
      this.sequelize = model;
      this.empty = 0;
    }
  }
  
  //pass in database choice, make search normally
  async fill() {
    if (this.mongoose) {
      let sqlHalf;
      try {
        sqlHalf = await Study.find({
          where: {id: this.mongoose.sqlId},
          include: [
            {model: Journal},
            {model: Tag, as: 'TaggedStudy'},
            {model: Author, as: 'Studies'},
          ],
        });
      } catch (e) {
        console.error(e);
      }
      let sequelizeKeys = Object.keys(sqlHalf.dataValues);
      sequelizeKeys.forEach(key => {
        this[key] = sqlHalf[key];
      });
      this.sequelizeKeys = sequelizeKeys;
      this.sequelize = sqlHalf;
    } else if (this.sequelize) {
      let mongoHalf;
      try {
        mongoHalf = await StudyOverflow.find({sqlId: this.sqlId});
        mongoHalf = mongoHalf[0];
      } catch (e) {
        console.error(e);
        return e;
      }
      let mongooseKeys = Object.keys(mongoHalf['_doc']);
      mongoKeys.forEach( key => {
        this[key] = mongoHalf[key]
      })
      this.mongooseKeys = mongooseKeys;
      this.mongoose = mongoHalf;
      let params = {
        where: {
          id: this.sqlId,
        },
        include: [],
      };
      if (!this.Journal) params.include.push({model: Journal});
      if (!this.TaggedStudy) params.include.push({model: Tag, as: 'TaggedStudy'});
      if (!this.Studies) params.include.push({model: Author, as: 'Studies'});
      if (params.include.length) {
        let sqlFill;
        try {
          sqlFill = await Study.find(params);
        } catch (e) {
          console.error(e);
          return e;
        }
        //taggedstudy is tags, studies are authors the models are stupid right now
        if (sqlFill.Journal) this.Journal = sqlFill.Journal;
        if (sqlFill.TaggedStudy) this.TaggedStudy = sqlFill.TaggedStudy;
        if (sqlFill.Studies) this.Studies = sqlFill.Studies;
        this.sequelizeKeys = Object.keys(sqlFill.dataValues);
        this.sequelize = sqlFill;
      }
    } else {
      console.error('cannot fill');
      return false;
    }
    return true;
  }
  
  async find(params, database) {
    if (database === 'mongo') {
      let mongoResult;
      try {
        mongoResult = await StudyOverflow.find(params);
      } catch (e) {
        console.error(e);
        return e;
      }
      if (mongoResult.length == 1) mongoResult = mongoResult[0];
      return mongoResult;
    } else if (database === 'sql') {
      let sqlResult;
      try {
        sqlResult = await Study.find(params);
      } catch (e) {
        console.error(e);
        return e;
      }
      return sqlResult;
    } else {
      console.error('invalid database');
      return false;
    }
  }

  addModel(model) {
    if (model.sqlId) {
      if (this.sqlId == model.sqlId || this.empty) {
        let mongooseKeys = Object.keys(model['_doc'])
        mongooseKeys.forEach(key => {
        this[key] = model[key];
        });
        this.mongooseKeys = mongooseKeys;
        this.mongoose = model;
        this.empty = 0;
      }
    } else if (model.dataValues) {
      if (this.sqlId == model.id || this.empty) {
        let sequelizeKeys = Object.keys(model.dataValues)
        sequelizeKeys.forEach(key => {
          this[key] = model[key];
        });
        this.sequelizeKeys = model;
        this.sequelize = model;
        this.empty = 0;
      }
    }
    return true;
  }
  async save() {
    if(this.mongoose) {
      this.mongooseKeys.forEach(key => {
        this.mongoose[key] = this[key];
      });
      try {
        await this.mongoose.findByIdAndUpdate(this.mongoId, this.mongoose);
      } catch(e) {
        console.error('Could not update mongoose model');
        return e;
      }
    }
    if(this.sequelize) {
      this.sequelizeKeys.forEach(key => {
        this.sequelize[key] = this[key];
      });
      try{
        await this.sequelize.save();
      } catch(e) {
        console.error('Could not update sequelize model');
        return e;
      }
    }
  }
}

module.exports = FullStudy
