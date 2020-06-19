var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes

//classes/what's below
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;

