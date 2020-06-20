var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', (err, results, fields) => {
        if (err) { throw err; }
        callback(results);
      });

    },
    post: function (body, callback) {
      db.query(`SELECT id FROM users WHERE name = '${body.username}';`, (err, results, fields) => {
        let user_id = (results);
        user_id = user_id[0]['id'];
        db.query(`SELECT id FROM rooms WHERE name = '${body.roomname}';`, (err, results, fields) => {
          let room_id = (results);
          room_id = room_id[0]['id'];
          db.query(`INSERT INTO messages (text, user_id, room_id) VALUES ('${body.message}', ${user_id}, ${room_id});`, (err, results, fields) => {
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
      })

    },
    post: function (body, callback) {
      db.query(`INSERT INTO users (name) VALUES ('${body.username}');`, (err, results, fields) => {
        callback();
      })
    }
  }
};

