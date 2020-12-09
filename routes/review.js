const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

// const isAuthenticated = require("../middlewares/isAuthenticated");

const Review = require("../models/Review");
//isAuthenticated
router.post("/games/:id/post", async (req, res) => {
  try {
    // console.log(req.fields);

    const newComment = new Review({
      Review_title: req.fields.title,
      Review_comments: req.fields.comments,

      // owner: req.user,
    });

    await newComment.save();

    res.json(newComment);
  } catch (error) {
    console.log("passe ici pk on sais pas mais passe ici");
    res.status(400).json({ error: error.message });
  }
});

router.get("/games/:id/review"),
  async (req, res) => {
    try {
      const reviewId = await Review.findById(req.params.id).populate({
        select: "Review_title Review_comments",
      });
      res.json(reviewId);
    } catch (error) {
      console.log("repasse ici");
      res.status(400).json({ error: error.message });
    }
    console.log("ca marche inchallah");
  };

module.exports = router;
