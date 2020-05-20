const express = require('express');

const UserController = require('../controllers/userController');

const routes = express.Router();

routes.post('/users', UserController.register);
routes.get('/users', UserController.getUsers);
routes.post('/users/cpfcheck', UserController.cpfCheck);


module.exports = routes;

