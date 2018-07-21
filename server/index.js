const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:32768/socket');
require('./tweet');

/*io.on('connection', socket => {
  console.log(`Socket connected: ${socket.id}`);

  setInterval(() => {
    socket.emit('message', 'Jesus Loves YOU!!!!');
  }, 3000);
});*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.io = io;
  return next();
});

const Tweet = mongoose.model('Tweet');

app.post('/tweet', async (req, res) => {
  const tweet = await Tweet.create(req.body);

  req.io.emit('tweet', tweet);

  return res.json(tweet);
});

server.listen(3000);