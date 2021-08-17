const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/comics", async (req, res) => {
  const { title, limit, skip } = req.query;

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&title=${title}&limit=${limit}&skip=${skip}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/comics/:characterId", async (req, res) => {
  const { characterId } = req.params;

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
