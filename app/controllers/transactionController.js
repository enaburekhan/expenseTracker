const express = require('express');
const transactionModel = require('../models/transactionModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const transactions = await transactionModel.getTransactions();
    res.render('transactions', { title: 'Transaction List', transactions });
  } catch (err) {
    next(err);
  }
});

router.get('/create', async(req, res, next) => {
  res.render('transaction_form')
})


// DELETING FROM A MODAL
router.post('/', async(req, res, next) => {
  console.log('use this id to delete in a query: ' + req.body['transaction_id'])

  res.redirect('/transactions')
})

module.exports = router;
