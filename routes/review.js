const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

// const isAuthenticated = require("../middlewares/isAuthenticated");

const Review = require("../models/Review");
//isAuthenticated
router.post("/games/:slug/post", async (req, res) => {
  try {
    const newComment = new Review({
      Review_title: title,
      Review_comments: comments,
      // owner: req.user,
    });

    await newComment.save();

    res.json(newComment);
  } catch (error) {
    console.log("passe ici pk on sais pas mais passe ici");
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
