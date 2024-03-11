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

module.exports = router;
