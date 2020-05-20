const express = require('express');

const SessionController = require('../controllers/sessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.cadSession);
routes.get('/sessions', SessionController.getSessions);

module.exports = routes;