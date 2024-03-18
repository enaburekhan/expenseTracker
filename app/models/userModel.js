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
    const result = await db.query('INSERT INTO User (UserID, Email, Password, Username, FirstName) VALUES (?, ?, ?, ?, ?)', [userId, email, password, username, firstName])
    console.log('result', result);
    // Check if the result is an array with atleast one element
    if(Array.isArray(result) && result.length > 0){
      const insertId = result[0].insertId

      // Check if insertId is valid
      if(insertId !== undefined){
        return insertId
      }
    }  
    // If the result doesn't match the expected format, throw an error
    throw new Error('User creation failed: Invalid result format')
    }catch(error){
       console.error('Error creating user:', error);
       throw error; // Rethrow the error to handle it in the signup controller
    }
  }
}

module.exports = User

