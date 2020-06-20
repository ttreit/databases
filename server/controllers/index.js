var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((results) => {
        res.end(JSON.stringify(results));
      });
    },


    post: function (req, res) {
      models.messages.post(req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((results) => {
        res.end(JSON.stringify(results));
      });
    },
    post: function (req, res) {
      models.users.post(req.body);
      res.end();
    }
  }
};

