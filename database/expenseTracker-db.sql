-- MySQL code to create the structure of the Expense Tracker database

-- Create User table
CREATE TABLE User
(
  UserID VARCHAR(50) PRIMARY KEY,
  Username VARCHAR(50) UNIQUE,
  Password VARCHAR(50),
  Email VARCHAR(100) UNIQUE,
  FirstName VARCHAR(50),
  LastName VARCHAR(50),
  DateOfBirth DATE
);

-- Create Category table
CREATE TABLE Category
(
  CategoryID VARCHAR(50) PRIMARY KEY,
  CategoryName VARCHAR(50)
);

-- Create Transaction table
CREATE TABLE Transaction (
  TransactionID VARCHAR(50) PRIMARY KEY,
  Type ENUM('income', 'expense'),
  Amount DECIMAL
(10, 2),
  Date DATE,
   CategoryID VARCHAR
(50),
  Description VARCHAR
(255),
  UserID VARCHAR
(50), 
  FOREIGN KEY
(CategoryID) REFERENCES Category
(CategoryID),
  FOREIGN KEY
(UserID) REFERENCES User
(UserID) -- Corrected FOREIGN KEY syntax
);

-- Insert sample data into User table
INSERT INTO User
  (UserID, Username, Password, Email, FirstName, LastName, DateOfBirth)
VALUES
  ('1', 'john123', 'password123', 'john@example.com', 'John', 'Doe', '1990-05-15'),
  ('2', 'jane456', 'pass1234', 'jane@example.com', 'Jane', 'Smith', '1995-09-22');

-- Insert sample data into Category table
INSERT INTO Category (CategoryID, CategoryName)
VALUES
  ('1', 'Food'),
  ('2', 'Transportation'),
  ('3', 'Rent'),
  ('4', 'Salary'),
  ('5', 'Kids'),
  ('6', 'Shopping'),
  ('7', 'Groceries'),
  ('8', 'Bills'),
  ('9', 'Student loans'),
  ('10', 'Travel'),
  ('11', 'Passive income');

-- Insert sample data into Transaction table
INSERT INTO Transaction
  (TransactionID, Type, Amount, Date, CategoryID, Description, UserID)
VALUES
  ('1', 'expense', 25.50, '2024-02-20', 1, 'Lunch at a restaurant', '1'),
  ('2', 'expense', 50.00, '2024-02-22', 2, 'Bus fare', '1'),
  ('3', 'income', 1000.00, '2024-02-25', 4, 'Monthly salary', '2'),
  ('4', 'expense', 800.00, '2024-02-28', 3, 'Rent payment', '2');