const mongoModels = require('../../models/mongoose');
const Category = mongoModels.Category;
const faker = require('faker');
 
const seed = async n => {
  for(let i = 0; i < n; i++){
    let thisCategory = new Category({name: faker.commerce.department()});
    await thisCategory.save();
  }
}

module.exports = seed;
