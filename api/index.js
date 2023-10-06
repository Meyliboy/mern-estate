import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
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

app.use("/api/user", userRouter);

app.listen(1001, () => {
  console.log("Server is running on port 1001");
});
