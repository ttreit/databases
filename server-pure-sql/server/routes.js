var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes

router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

router.get('/test', controller.test.get);


module.exports = router;
