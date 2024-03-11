const db = require('../services/db');

const getCategories = async () => {
  try {
    const rows = await db.query('SELECT * FROM Category');
    return rows;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

module.exports = {
  getCategories,
};
