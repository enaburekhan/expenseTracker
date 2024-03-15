const express = require('express');
const transactionModel = require('../models/transactionModel');
const categoryModel = require('../models/categoryModel')

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const transactions = await transactionModel.getTransactions();
    res.render('transactions', { title: 'Transaction List', transactions });

  } catch (err) {
    next(err);
  }
});



router.get('/create', async (req, res, next) => {
  const categories = await categoryModel.getCategories()
  //console.log(categories)
  res.render('transaction_form', {
    title: "Add a Transaction",
    categories: categories,
  })
})

router.post('/create', async(req, res, next) => {
  //console.log(req.body)
  let passingData = {
    TransactionID: Math.round(Math.random()*200),
    ...req.body,
    UserID: 'dude',
  }

  console.log(passingData)

  res.redirect('/transactions')
})

module.exports = router;
