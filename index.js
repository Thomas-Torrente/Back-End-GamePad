const express = require("express");

const formidable = require("express-formidable");
const axios = require("axios");
const cors = require("cors");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

const app = express();
require("dotenv").config();
app.use(formidable());
app.use(cors());

mongoose.connect(process.env.MANGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const publicKey = process.env.PUBLIC_KEY;

// Import des routes
const userRoutes = require("./routes/user");
app.use(userRoutes);

const reviewRoutes = require("./routes/review");
app.use(reviewRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "error do not exist" });
});

app.listen(process.env.PORT, () => {
  console.log("serveur has been start");
});
