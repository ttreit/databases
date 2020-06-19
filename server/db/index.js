var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect();

connection.query('SELECT * FROM users', (err, rows, fields) => {
  if (err) { throw err; }
  console.log('rows: ', rows);
  //console.log('fields: ', fields);
});


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


