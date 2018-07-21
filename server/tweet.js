const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
  content: {
    type: String,
    require: true,
    trim: true,
    maxlength: 200,
  },

  avatar_url: {
    type: String,
    require: true,
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  }
});

mongoose.model('Tweet', TweetSchema);