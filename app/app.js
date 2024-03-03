// Import express.js
const express = require('express');

// Create express app
var app = express();

// Add static files location
app.use(express.static('static'));

// Get the functions in the db.js file to use
const db = require('./services/db');
console.log('db', db);

// Create a route for root - /
app.get('/', function (req, res) {
  res.send('Hello world again!');
});

app.get('/all-students', function (req, res) {
  const sql = 'select * from Students';
  db.query(sql).then((results) => {
    res.json(results);
  });
});

// Task to display a formatted list
app.get('/all-students-formatted', function (req, res) {
  const sql = 'select * from Students';

  let output = '<table border=ipx>';
  db.query(sql).then((results) => {
    for (let row of results) {
      output += '<tr>';
      output += '<td>' + row.id + '</td>';
      output +=
        '<td>' +
        '<a href="./single-student/' +
        row.id +
        '">' +
        row.name +
        '</a>' +
        '</td>';
      output += '</tr>';
    }
    output += '</table>';
    res.send(output);
  });
});

app.get('/all-students-formatted/single-student/:id', function (req, res) {
  let stId = req.params.id;
  let stSql =
    "SELECT s.name as Student, p.name as Programme, p.id as Pcode \
  FROM Students s \
  , Programmes p \
  WHERE s.id = ? \
  AND p.id = '09UU0002' \
  ";
  let modSql =
    ' SELECT * \
  FROM Programme_Modules pm, Modules m \
  WHERE pm.module = m.code \
  AND pm.programme = ?; \
  ';
  db.query(stSql, [stId]).then((results) => {
    let pCode = results[0].Pcode;
    let output = '';
    output += 'Student: ' + results[0].Student;
    output += ' Programme: ' + results[0].Programme;
    res.send(output);

    db.query(modSql, [pCode]).then((results) => {
      console.log(results);
      res.send(pCode);
    });
  });
});

// Create a route for testing the db
app.get('/db_test', function (req, res) {
  // Assumes a table called test_table exists in your database
  sql = 'select * from test_table';
  db.query(sql).then((results) => {
    console.log('results', results);
    let output = results.map((result) => result.name);

    res.send(`<li>This is ${output[0]} </li><li>This is ${output[1]}</li>`);
  });
});

// Create a route for /goodbye
// Responds to a 'GET' request
app.get('/goodbye', function (req, res) {
  res.send('Goodbye world!');
});

// Create a dynamic route for /hello/<name>, where name is any value provided by user
// At the end of the URL
// Responds to a 'GET' request
app.get('/hello/:name', function (req, res) {
  // req.params contains any parameters in the request
  // We can examine it in the console for debugging purposes
  console.log(req.params);
  //  Retrieve the 'name' parameter and use it in a dynamically generated page
  res.send('Hello ' + req.params.name);
});

// Start server on port 3000
app.listen(3000, function () {
  console.log(`Server running at http://127.0.0.1:3000/`);
});
