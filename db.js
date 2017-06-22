const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'story_donation'
});

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('CONNECTED WOOHOOHOO');
	console.log('connected as id ' + connection.threadId);
});

// connection.end();

module.exports = connection;