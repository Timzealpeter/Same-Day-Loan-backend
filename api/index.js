import dotenv from "dotenv";

import app from "../src/app.js";
import connectDb from "../src/config/db.js";

dotenv.config();

// Connect to MongoDB
await connectDb();

export default app;
