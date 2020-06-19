var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      //connect to DB?? Or already connected?
      //get all messages SELECT * FROM messages
      const data = 'check 1 check';
      console.log('test data: ', data);
      return data;

    },
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

