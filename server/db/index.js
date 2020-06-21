var Sequelize = require('sequelize');
module.exports = new Sequelize('chat', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});