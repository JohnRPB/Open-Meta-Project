const mongoModels = require('../../models/mongoose');
const Comment = mongoModels.Comment;
const User = mongoModels.User;
const faker = require('faker');

const seed = async n => {
  let users 
  try{
    users = await User.find()
  } catch(e) {
    console.error(e);
  }
  for (let i = 0; i < n; i++) {
    let commentBuild = {
      user: Math.floor(Math.random() * users.length),
      text: faker.lorem.paragraph(),
      date: new Date(),
    };
    let thisComment = new Comment(commentBuild);
    await thisComment.save();
  }
};
