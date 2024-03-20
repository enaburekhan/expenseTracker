const db = require('../services/db');

const getTransactions = async () => {
  try {
    const rows = await db.query('SELECT * FROM Transaction');
    return rows;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};
const calculateTotalBalance = (transactions) => {
  let totalBalance = 0;
  for (const transaction of transactions) {
    if (transaction.type === 'income') {
      totalBalance += transaction.Amount;
    } else {
      totalBalance -= transaction.Amount;
    }
  }
  return totalBalance;
};

module.exports = {
  getTransactions,
  calculateTotalBalance,
};
