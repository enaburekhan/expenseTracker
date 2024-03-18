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

<<<<<<< HEAD
router.get('/home', async (req, res, next) => {
  try {
    const transactions = await transactionModel.getTransactions();
    const totalBalance = transactionModel.calculateTotalBalance(transactions);

    res.render('HomePage', { title: 'Transaction List', transactions, totalBalance });
  } catch (err) {
    next(err);
  }
});


=======
router.get('/create', async(req, res, next) => {
  res.render('transaction_form')
})


// DELETING FROM A MODAL
router.post('/', async(req, res, next) => {
  console.log('use this id to delete in a query: ' + req.body['transaction_id'])

  res.redirect('/transactions')
})

>>>>>>> d560055d91685e77cfb30e04c6f5fcb89b69b78c
module.exports = router;
