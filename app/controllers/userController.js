const express = require('express');
const userModel = require('../models/userModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await userModel.getUsers();
    res.render('users', { title: 'User List', users });
  } catch (err) {
    next(err);
  }
});

router.get('/homePage', async (req, res, next) => {
  try {
    const transactions = await transactionModel.getTransactions();

    const query = 'SELECT SUM(CASE WHEN type = "income" THEN amount ELSE -amount END) AS total_balance FROM transactions';

    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing SQL query: ', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      const totalBalance = results[0].total_balance;

      res.render('HomePage', { title: 'Transaction List', transactions, totalBalance });
    });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
