import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import detailsRoutes from "./routes/detailsRoutes.js";

dotenv.config();

const app = express();

// FIX: Remove the trailing slash from origin
app.use(
  cors({
    origin: "http://localhost:5173", // <- NO trailing slash!
    credentials: true,
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
