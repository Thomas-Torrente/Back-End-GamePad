const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

// const isAuthenticated = require("../middlewares/isAuthenticated");

const Review = require("../models/Review");
//isAuthenticated
router.post("/games/post", async (req, res) => {
  const { description, title, slug } = req.fields;

  const commentFound = await Review.findOne({ gameSlug: req.fields.slug });

  if (commentFound === null) {
    // si c null go créer le tableau comment all
    const commentAll = new Review({
      gameSlug: slug,
      commentsAll: [{ title: title, description: description, user: req.user }],
    });
    commentAll.save();
    console.log("ca passe creme dans if");
    res.json(commentAll);
  } else {
    commentFound.commentsAll = [
      ...commentFound.commentsAll,
      { title: title, description: description, user: req.user },
    ];
    commentFound.save();
    console.log("ca pase bien dans le else");
    res.json(commentFound);
  }
});

router.get("/games/:id/review", async (req, res) => {
  try {
    const reviewSlug = await Review.findOne({
      gameSlug: req.params.id,
    }).select("commentsAll.title commentsAll.description commentsAll.user");

    res.json(reviewSlug);
    console.log(reviewSlug);
  } catch (error) {
    console.log("erreur");
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
