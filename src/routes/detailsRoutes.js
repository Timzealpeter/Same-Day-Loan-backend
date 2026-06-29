import express from "express";
import {
  getAllDetails,
  createDetails,
} from "../controllers/detailController.js";

const router = express.Router();

router.get("/", getAllDetails);
router.post("/", createDetails);

export default router;
