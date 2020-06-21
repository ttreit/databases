var db = require('../db');
var Sequelize = require('sequelize');

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ', err));

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT users.username, rooms.name, messages.text FROM users INNER JOIN messages ON users.id = messages.user_id INNER JOIN rooms ON rooms.id = messages.room_id;')
        .then((message) => {
          let results;
          [results] = message;
          callback(results);
        }).catch((message) => {
          console.log('catch******: ', message);
        });
    },
    post: function (body, callback) {
      db.query(`SELECT id FROM users WHERE username = '${body.username}'`)
      .then((data) => {
        let userId;
        [userId] = data;
        userId = userId[0]['id'];
        console.log('UserId: ', userId);
      })
    }

      // db.query(`SELECT id FROM users WHERE username = '${body.username}';`, (err, results, fields) => {
      //   let userId = (results);
      //   userId = userId[0]['id'];
      //   db.query(`SELECT id FROM rooms WHERE name = '${body.roomname}';`, (err, results, fields) => {
      //     let roomId = (results);
      //     roomId = roomId[0]['id'];
      //     db.query(`INSERT INTO messages (text, user_id, room_id) VALUES ('${body.message}', ${userId}, ${roomId});`, (err, results, fields) => {
      //       if (err) { throw error; }
      //       callback();
      //     });
      //   });
      // });

  },

  users: {
    get: function (callback) {
      db.query('SELECT * FROM users')
        .then((data) => {
          let results;
          [results] = data;
          callback(results);
        }).catch((error) => {
          console.log('Caught an error: ', error);
        });
    },
    post: function (body, callback) {
      db.query(`INSERT INTO users (username) VALUES ('${body.username}')`)
        .then(callback())
        .catch((error) => {
          console.log('Caught an error: ', error);
        });
    }
  },

  test: {
    get: function (callback) {
      db.query('SELECT * FROM test');
    }
  }
};
