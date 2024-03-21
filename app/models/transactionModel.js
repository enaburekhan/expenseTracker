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
    //totalBalance += transaction.Amount * ( transaction.Type == 'income' ? 1 : -1 )
    totalBalance += parseFloat(transaction.Amount)
    
    /*
    if (transaction.Type == 'income') {
      totalBalance += transaction.Amount;
    } else {
      totalBalance -= transaction.Amount;
    }
    */
    
  }
  return totalBalance;

};

async function getSingleTransaction(id) {
  let sql = `SELECT * FROM Transaction WHERE TransactionID=?`
  let transaction = await db.pool.query(sql, [id])
  transaction = transaction[0][0]
  //console.log(transaction)

  return transaction
}

module.exports = {
  getTransactions,
  calculateTotalBalance,
  getSingleTransaction,

};
