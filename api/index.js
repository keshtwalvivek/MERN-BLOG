import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

import userRouters from "./routes/user.routes.js";
import authRoutes from "./routes/auth.route.js";

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("mongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
  console.log("server is running on port 3000");
});

app.use("/api/user", userRouters);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
