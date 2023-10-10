import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("Signed up succesfully");
});

export default router;
