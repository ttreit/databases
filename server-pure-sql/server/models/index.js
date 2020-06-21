var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query(`SELECT users.username, rooms.name, messages.text FROM users INNER JOIN messages ON users.id = messages.user_id INNER JOIN rooms ON rooms.id = messages.room_id;`, (err, results, fields) => {
        if (err) { throw error; }
        callback(results);
      });
    },
    post: function (body, callback) {
      db.query(`SELECT id FROM users WHERE username = '${body.username}';`, (err, results, fields) => {
        let userId = (results);
        userId = userId[0]['id'];
        db.query(`SELECT id FROM rooms WHERE name = '${body.roomname}';`, (err, results, fields) => {
          let roomId = (results);
          roomId = roomId[0]['id'];
          db.query(`INSERT INTO messages (text, user_id, room_id) VALUES ('${body.message}', ${userId}, ${roomId});`, (err, results, fields) => {
            if (err) { throw error; }
            callback();
          });
        });
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', (err, results, fields) => {
        if (err) { throw err; }
        callback(results);
      });

    },
    post: function (body, callback) {
      db.query(`INSERT INTO users (username) VALUES ('${body.username}');`, (err, results, fields) => {
        callback();
      });
    }
  },

  test: {
    get: function (callback) {
      db.query('SELECT * FROM test', (err, results, fields) => {
        if (err) { throw err; }
        callback(results);
      });
    }
  }
};
