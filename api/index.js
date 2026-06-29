import dotenv from "dotenv";

import app from "../app.js";
import connectDb from "../config/db.js";

dotenv.config();

// Ensure the database connection is established
await connectDb();

export default app;
