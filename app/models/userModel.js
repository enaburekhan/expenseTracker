const db = require('../services/db');

class User {
  static async getUserByEmail(email) {
    const [rows] = await db.query('SELECT * FROM User WHERE Email = ?', [email]);
    return rows[0]; // Assuming email is unique and returns only one user
  }

  static async createUser(email, password, username, firstName) {
    const [result] = await db.query('INSERT INTO User (Email, Password, Username, FirstName) VALUES (?, ?, ?, ?)', [email, password, username, firstName])
    return result.insertId; // return the ID of the newly created user.  
  }
}

module.exports = User

