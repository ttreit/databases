var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      //connect to DB?? Or already connected?
      //get all messages SELECT * FROM messages
      const data = null;
      console.log('test data: ', data);
      return 'This is a test of the models get messages function';

    },
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

