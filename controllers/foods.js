const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
const recipe = require('../models/recipe.js');

router.get('/', (req, res) => {
    res.render('foods/index.ejs')
  });

router.get('/users/:userId/foods/new', async(req, res) => {
  const user = await User.findById(req.params.userId)
    res.render('foods/new.ejs')
  });

  router.post('/users/:userId/foods', async (req, res) => {
    try {
      const user = await User.findById(req.session.userId)
      await foods.create(req.body);
      user.foods.push(req.body)
      await user.save()
      res.redirect('foods')
    } catch (err) {
      console.log(err)
      res.redirect('foods')
    }
  })

module.exports = router;