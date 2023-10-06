import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error({ MD_message: err.message });
  });

const app = express();

app.listen(1001, () => {
  console.log("Server is running on port 1001");
});