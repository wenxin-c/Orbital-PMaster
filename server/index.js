const mysql = require('mysql');
const express = require("express");
const session = require('express-session');
const path = require("path");

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '000825',
	database : 'nodelogin'
});

const app = express(); // create express app

// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "build")));

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });


// app.post('/auth', function(request, response) {
// 	// Capture the input fieldss
// 	let username = request.body.username;
// 	let password = request.body.password;
// 	// Ensure the input fields exists and are not empty
// 	if (username && password) {
// 		// Execute SQL query that'll select the account from the database based on the specified username and password
// 		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			// If there is an issue with the query, output the error
// 			if (error) throw error;
// 			// If the account exists
// 			if (results.length > 0) {
// 				// Authenticate the user
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				// Redirect to home page
// 				return response.redirect('/main');
// 			} else {
// 				response.send('Incorrect Username and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });

// app.get('/main', function(request, response) {
// 	// If the user is loggedin
// 	if (request.session.loggedin) {
// 		// Output username
// 		// response.send('Welcome back, ' + request.session.username + '!');
// 		response.render('/main');		
// 	} else {
// 		// Not logged in
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });



app.listen(5004, () => {
  console.log("server started on port 5004");
});