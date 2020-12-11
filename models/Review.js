const mongoose = require("mongoose");

const Review = mongoose.model("Review", {
  gameSlug: String,
  commentsAll: Array,
  commentTitle: String,
  commentDescription: String,
  user: String,
});

module.exports = Review;
