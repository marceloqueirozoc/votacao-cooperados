const express = require('express');

const VoteController = require('../controllers/voteController');

const routes = express.Router();

routes.get('/votes', VoteController.getVotes);
routes.post('/votes', VoteController.vote);

module.exports = routes;