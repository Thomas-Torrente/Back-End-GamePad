const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

// const isAuthenticated = require("../middlewares/isAuthenticated");

const Review = require("../models/Review");
//isAuthenticated
router.post("/games/:id/post", async (req, res) => {
  const { description, title, slug } = req.fields;

  const checkCommentExist = await Review.findOne({ gameSlug: req.fields.slug });

  console.log(checkCommentExist);
  res.json(checkCommentExist);
  if (gameSlug === null) {
    // si c null go créer le tableau comment all
    const commentAll = new Review({
      gameSlug: slug,
      commentsAll: [{ title: title, description: description, user: req.user }],
    });
  } else {
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
  };

module.exports = router;
