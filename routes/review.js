const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

const isAuthenticated = require("../middlewares/isAuthenticated");

const Review = require("../models/Review");

router.post("/review/comment", isAuthenticated, async (req, res) => {
  // permet de créer un commentaire si user is authentifier
  try {
    const { title, comments } = req.fields;
    //  add screen quand le reste est ok

    const newComment = new Review({
      Review_title: title,
      Review_comments: comments,
      // owner: req.user,
    });
    // on veut que dans la création du commentaire yest un titre, le commentaire, et des screenshot si il veut

    // const result = await cloudinary.uploader.upload(req.files.picture.path, {
    //   // stock le sceen envoyer dans un fichier cloudinary gamepad
    // });
    // newComment.Review_screen = result;
    // // on dit que le screen du commentaire est = a result
    await newComment.save();
    //   on enregistre le review
    res.json(newComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/reviews", async (req, res) => {});
