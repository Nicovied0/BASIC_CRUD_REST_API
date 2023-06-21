import { Router } from "express";

const router = new Router();

router.get("/", (req, res) => {
  const data = {
    name: "Nico",
    website: "ondev.vercel.app",
  };
  res.json(data);
});

export default router;
