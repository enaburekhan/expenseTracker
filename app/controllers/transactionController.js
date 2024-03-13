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

router.delete('/:id/delete', async(req, res, next) => {
  res.redirect('/transactions')
})

module.exports = router;
