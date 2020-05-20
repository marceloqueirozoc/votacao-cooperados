const express = require('express');
const bodyparser = require('body-parser');
const userRoute = require('./routes/userRoute');
const topicRoute = require('./routes/topicRoute');
const sessionRoute = require('./routes/sessionRoute');
const voteRoute = require('./routes/voteRoute');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));
app.use(userRoute);
app.use(topicRoute);
app.use(sessionRoute);
app.use(voteRoute);

app.listen(3000, () => {
    console.log('Server started on port 3000!');
  });