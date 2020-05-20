const express = require('express');

const TopicController = require('../controllers/topicController');

const routes = express.Router();

routes.post('/topics', TopicController.cadTopic);
routes.get('/topics', TopicController.getTopics);

module.exports = routes;