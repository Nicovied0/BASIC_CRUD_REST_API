const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  const data = {
    name: "Nico",
    website: "ondev.vercel.app",
  };
  res.json(data);
});

module.exports = router;
