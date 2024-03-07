import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("mongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

const port = process.env.PORT;
app.listen(port, () => {
  console.log("server is running on port 3000");
});
