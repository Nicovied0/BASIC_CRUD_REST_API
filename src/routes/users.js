import { Router } from "express";
// const axios = require("axios");
import axios from 'axios'

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data" });
  }
});

export default router;
