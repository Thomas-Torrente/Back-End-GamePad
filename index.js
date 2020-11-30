const express = require("express");
const formidable = require("express-formidable");
const axios = require("axios");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(formidable());
app.use(cors());

const publicKey = process.env.PUBLIC_KEY;

app.get("/games"),
  async (req, res) => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/games`);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

app.listen(process.env.PORT, () => {
  console.log("serveur has been start");
});
