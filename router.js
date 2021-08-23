const express = require("express");
const model = require("./model");
const router = express.Router();

router.get("/", async (req, res) => {
  const myData = await model.find();
  res.status(200).json(myData);
});

router.post("/", async (req, res) => {
  const newData = await model.create(req.body);
  res.status(200).json(newData);
});

module.exports = router;
