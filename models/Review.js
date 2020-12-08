const mongoose = require("mongoose");

const Review = mongoose.model("Review", {
  Review_title: String,
  Review_comments: String,
  // Review_sreen: { type: mongoose.Schema.Mixed, default: {} },
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
});

module.exports = Review;
