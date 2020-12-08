const express = require("express");
const router = express.Router();

const Review = require("../models/Review");
const User = require("../models/User");
// router.post("/review/:slug", async (req, res) => {
//   try {
//     const { title, comments, screen } = req.fields;

//     const newComment = new Review({
//       Review_title: title,
//       Review_comments: comments,
//       owner: req.user,
//     });

//     await newComment.save();
//     res.json(newComment);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
