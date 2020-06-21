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
        });
    },
    post: function (body, callback) {
      db.query(`SELECT id FROM users WHERE username = '${body.username}'`)
        .then((data) => {
          let userId;
          [userId] = data;
          userId = userId[0]['id'];
          return userId;
        })
        .then((userId) => {
          db.query(`SELECT id FROM rooms WHERE name = '${body.roomname}'`)
            .then((data2) => {
              let roomId;
              [roomId] = data2;
              roomId = roomId[0]['id'];
              return [userId, roomId];
            }).then((ids) => {
              db.query(`INSERT INTO messages (text, user_id, room_id) VALUES ('${body.message}', ${ids[0]}, ${ids[1]});`);
              return 'Done!';
            }).then((done) => {
              callback(done);
            });
        });
    }

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
