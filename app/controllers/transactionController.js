const express = require('express');
const transactionModel = require('../models/transactionModel');
const categoryModel = require('../models/categoryModel')

const router = express.Router();


// Reading transactions
router.get('/', async (req, res, next) => {
  try {
    const transactions = await transactionModel.getTransactions();
    res.render('transactions', { title: 'Transaction List', transactions });

  } catch (err) {
    next(err);
  }
});


// Creating transactions
router.get('/create', async (req, res, next) => {
  const categories = await categoryModel.getCategories()
  //console.log(categories)
  res.render('TransactionForm', {
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

// Updating transactions
router.get('/:id/update', async(req, res, next) => {
  
  const categories = await categoryModel.getCategories()
  res.render('TransactionForm', {
    title: `Updating Transaction`,
    categories,

  })
})

router.post('/:id/update', async(req, res, next) => {
  
  const categories = await categoryModel.getCategories()
  res.redirect('/transactions')
})

// DELETING FROM A MODAL
router.post('/', async(req, res, next) => {
  console.log('use this id to delete in a query: ' + req.body['transaction_id'])
  res.redirect('/transactions')
})

module.exports = router;
