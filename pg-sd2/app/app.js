const path = require('path')
const express = require("express");
const db = require('./services/db');

const turtleRouter = require('./routes/turtleRouter')
const uniRouter = require('./routes/uniRouter')

// Create express app
var app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Add static files location
app.use(express.static("static"));

// Use the Pug templating engine
app.set('view engine', 'pug');
app.set('views', './app/views');

// public folder
app.use(express.static(path.join(__dirname, 'public')));

// Create a route for root - /
app.get("/", function(req, res) {
    res.render('index', {
        title: 'Index Page'
    })
});


app.use('/turtles', turtleRouter)
app.use('/uni', uniRouter)


app.get("/landing_page", function(req, res) {
    res.render('landing_page', {
        title: 'Landing Page',
    });
});


// Start server on port 3000
app.listen(3000,function(){
    console.log(`Server running at http://127.0.0.1:3000/`);
});