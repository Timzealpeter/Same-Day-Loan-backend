import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDb from "./config/db.js";
import detailsRoutes from "./routes/detailsRoutes.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// Enable CORS for specific origin
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/details", detailsRoutes);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`APP is listening on ${PORT}`);
  });
});
