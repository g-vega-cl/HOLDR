import express from "express";
import {
  getTutorial,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/tutorial.js";
import auth from '../middleware/auth.js';

const router = express.Router();

router.get("/", getTutorial);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id",auth, deletePost);

export default router;
