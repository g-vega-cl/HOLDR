import express from 'express';
import {getTutorial} from '../controllers/tutorial.js';

const router = express.Router();

router.get('/', getTutorial);

export default router;