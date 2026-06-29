import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import detailsRoutes from "./routes/detailsRoutes.js";

dotenv.config();

const app = express();

// Enable CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running 🚀",
  });
});

// Routes
app.use("/api/details", detailsRoutes);

export default app;
