const express = require('express')
const router = express.Router()
const db = require('../services/db');

// Create a route for testing the db
router.get("/db_test", function(req, res) {
    // Assumes a table called test_table exists in your database
    sql = 'select * from test_table';
    db.query(sql).then(results => {
        //console.log(results);
        res.send(results)
    });
});

// Create a route for /goodbye
// Responds to a 'GET' request
router.get("/goodbye", function(req, res) {
    res.send("Goodbye world!");
});


router.get('/modules', (req, res, next)=>{
    sql = 'select * from modules';
    db.query(sql).then(results => {
        console.log(results);

        res.render('modules', {
            title: 'Modules',
            results: results,
        })
    });
})


// Create a dynamic route for /hello/<name>, where name is any value provided by user
// At the end of the URL
// Responds to a 'GET' request

router.get("/hello/:name", function(req, res) {
    // req.params contains any parameters in the request
    // We can examine it in the console for debugging purposes
    console.log(req.params);
    //  Retrieve the 'name' parameter and use it in a dynamically generated page
    res.send("Hello " + req.params.name);
});

module.exports = router;