var models = require('../models');
var db = require('../db');


module.exports = {
  messages: {
    get: function (req, res) {
      db.query('SELECT * FROM messages',
        function (error, results, fields) {
          if (error) { throw error; }
          res.end(JSON.stringify(results));
        });
    },
    // get: function (req, res) {
    //  return res.end(JSON.stringify(models.messages.get()));
    // }, // a function which handles a get request for all messages

    post: function (req, res) {
      console.log('****REQDATA**** ', req.body);

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

