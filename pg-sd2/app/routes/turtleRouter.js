const express = require('express')
const router = express.Router()
const db = require('../services/db');

const Turtle = require('../models/turtles')

router.get('/', (req, res, next)=>{
	let sql = `SELECT * FROM turtle`
	let data = []
	db.query(sql).then(results => {
		for(let i=0; i<results.length; i++)
			data.push(results[i])
		
		console.log(data)

		res.render('turtles', {
			title: 'Turtles',
			data: data
		})
	});
})

router.get('/detail/:id', (req, res, next)=>{
	let sql = `SELECT * FROM turtle
			   WHERE id='${req.params.id}'`
	let data = []
	db.query(sql).then(results => {
		for(let i=0; i<results.length; i++)
			data.push(results[i])
		
		console.log(data)
		res.render('turtle_detail', {
			title: 'DETAIL Turtle: ',
			data: data
		})
	});
})

/// CREATING
router.get('/create', (req, res, next)=>{
	res.render('turtle_form', {
		title: 'Create a Turtle'
	})
})

router.post('/create', (req, res, next)=>{
	let id = Math.round(Math.random()*256)
	console.log(req.body)
	let sql = `INSERT INTO turtle VALUES(${id}, '${req.body.callname}', '${req.body.DOB}', '${req.body.color}', '${req.body.weapon}')`
	db.query(sql)

	res.redirect('/turtles')
})

/// DELETING
router.get('/detail/:id/delete', (req, res, next)=>{
	let sql = `SELECT * FROM turtle 
			   WHERE id='${req.params.id}'`
	db.query(sql).then(results => {
		console.log(results)
		res.render('turtle_delete', {
			title: `Do you really want to delete ${results[0]['name']}?`
		})
	})

	
})

router.post('/detail/:id/delete', (req, res, next)=>{
	let sql = `DELETE FROM turtle WHERE id='${req.params.id}'`
	db.query(sql).then(res.redirect('/turtles'))
	
})

module.exports = router;