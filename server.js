import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

const app = express();
// Dot env
dotenv.config();

const PORT = process.env.PORT || 4000;

async function start() {
  // Database connection
  await connectDB();
  console.log(`Database connected`);
  app.listen(PORT, () => {
    console.log(`Server running at PORT:${PORT}...`);
  });
}
start();
