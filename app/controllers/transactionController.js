const express = require('express');
const router = express.Router();
const transactionModel = require('../models/transactionModel');


router.get('/', async (req, res, next) => {
  try {
    const transactions = await transactionModel.getTransactions();
    res.render('transactions', { title: 'Transaction List', transactions });
  } catch (err) {
    next(err);
  }
});

router.get('/home', async (req, res, next) => {
  try {
    const transactions = await transactionModel.getTransactions();
    const totalBalance = transactionModel.calculateTotalBalance(transactions);

    res.render('HomePage', { title: 'Transaction List', transactions, totalBalance });
  } catch (err) {
    next(err);
  }
});


module.exports = router;
