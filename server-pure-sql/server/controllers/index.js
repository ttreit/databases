var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((results) => {
        res.end(JSON.stringify(results));
      });
    },


    post: function (req, res) {
      models.messages.post(req.body, () => {
        res.status(200).end();
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get((results) => {
        res.end(JSON.stringify(results));
      });
    },
    post: function (req, res) {
      models.users.post(req.body, () => {
        res.status(200).end();
      });
    }
  },

  test: {
    get: function (req, res) {
      models.test.get((results) => {
        res.status(200).end();
      });
    }
  }
};