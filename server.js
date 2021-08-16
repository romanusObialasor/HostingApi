require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();
// const DataBase =
//   "mongodb+srv://wrsMKqHXcLIdob5I:wrsMKqHXcLIdob5I@cluster0.vxqcy.mongodb.net/Pushing?retryWrites=true&w=majority";

// mongoose
//   .connect(DataBase, {
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log(`Server connected successfully`);
//   });

app.get("/", async (req, res) => {
  res.status(200).send("Welcome Romanus to your Api");
  res.status(200).send("\nWelcome Romanus to your Api");
  res.status(200).send("\nWelcome Romanus to your Api");
  res.status(200).send("\nWelcome Romanus to your Api");
  res.status(200).send("\nWelcome Romanus to your Api");
});

app.listen(port, () => {
  console.log(`port da work`);
});
