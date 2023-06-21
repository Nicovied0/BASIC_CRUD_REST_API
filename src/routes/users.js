const { Router } = require("express");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "There was an error." });
  }
});

module.exports = router;
