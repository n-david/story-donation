const express = require('express');
const router = express.Router();
const connection = require('../db');

/* GET users listing. */
router.get('/stories', function(req, res, next) {
	connection.query('SELECT * FROM stories', function(err, results) {
		if (err) throw err;
		// console.log(results);
		res.json(results);
	});
});

module.exports = router;