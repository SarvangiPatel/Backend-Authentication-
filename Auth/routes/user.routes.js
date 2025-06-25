
const express = require('express');
const userControllers = require('../controllers/user.controller');

const UserRouter = express.Router();

// all user routes here
UserRouter.get('/test', userControllers.test);
UserRouter.post('/register', userControllers.register);
UserRouter.post('/signin', userControllers.signin);


module.exports = UserRouter;