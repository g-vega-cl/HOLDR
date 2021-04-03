import express from 'express';
import {getTutorial, createPost} from '../controllers/tutorial.js';

const router = express.Router();

router.get('/', getTutorial);
router.post('/', createPost);

export default router;