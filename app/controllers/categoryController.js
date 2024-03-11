const express = require('express');
const categoryModel = require('../models/categoryModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const categories = await categoryModel.getCategories();
    res.render('categories', { title: 'Category List', categories });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
