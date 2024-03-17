const db = require('../services/db');

class User {
  static async getUser(Email, Password) {
    const [rows] = await db.query('SELECT * FROM User WHERE Email = ?', [Email]);
    if(rows.length === 0){
      return null // User not found
    }
    return {Email: rows.Email, hashedPassword: rows.Password}; // Assuming email is unique and returns only one user
  }

  static async createUser(userId, email, password, username, firstName) {
    try{
    const [result] = await db.query('INSERT INTO User (UserID, Email, Password, Username, FirstName) VALUES (?, ?, ?, ?, ?)', [userId, email, password, username, firstName])
    if(!result || !result.insertId){
      throw new Error('User creation failed')
    }
    return result.insertId; // return the ID of the newly created user.  
    }catch(error){
       console.error('Error creating user:', error);
       throw error; // Rethrow the error to handle it in the signup controller
    }
  }
}

module.exports = User

