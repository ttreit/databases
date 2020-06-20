var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', (err, results, fields) => {
        //query finishes and then continue through this callback...
        if (err) { throw err; }
        callback(results);
      });

    },
    post: function (body) {
      db.query(`SELECT id FROM users WHERE name = '${body.username}';`, (err, results, fields) => {
        let user_id = (results);
        user_id = user_id[0]['id'];
        console.log('first callback: ', user_id);
        db.query(`SELECT id FROM rooms WHERE name = '${body.roomname}';`, (err, results, fields) => {
          let room_id = (results);
          room_id = room_id[0]['id'];
          console.log('second callback: ', room_id, user_id);
          db.query(`INSERT INTO messages (text, user_id, room_id) VALUES ('${body.message}', ${user_id}, ${room_id});`);
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
    post: function (body) {
      db.query(`INSERT INTO users (name) VALUES ('${body.username}');`)
      //console.log('***** username: ', body.username);
    }
  }
};

// db.query(`SELECT id FROM users WHERE name = '${body.username}';`, (err, results, fields) => {
//   let user_id = results;
//   (body, user_id) => db.query(`SELECT id FROM rooms WHERE name = '${body.roomname}';`, (err, results, fields) => {
//     let room_id = results;
//     (body, user_id, )
//   })
// });
// //db.query (user_id, )