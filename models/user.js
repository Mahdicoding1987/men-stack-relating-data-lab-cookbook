const mongoose = require('mongoose');

const foodsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,     
  },
  owner: {
    type: String,
    required: true,     
  },
  ingredients: {
    type: String,
    required: true,     
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});



const User = mongoose.model('User', userSchema);
const Food = mongoose.model('Food', foodsSchema);

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Food', foodsSchema);
