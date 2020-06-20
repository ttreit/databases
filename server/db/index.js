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

module.exports = connection;