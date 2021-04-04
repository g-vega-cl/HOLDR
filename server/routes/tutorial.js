import express from "express";
import {
  getTutorial,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/tutorial.js";

const router = express.Router();

router.get("/", getTutorial);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
