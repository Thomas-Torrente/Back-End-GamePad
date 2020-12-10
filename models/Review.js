const mongoose = require("mongoose");

const Review = mongoose.model("Review", {
  gameslug: String,
  commentsAll: Array,
  commentTitle: String,
  commentDescription: String,
  user: String,
});

module.exports = Review;
