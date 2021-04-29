import express from 'express';

import {payment, getTransactions, getUserTransactions} from '../controllers/stripe.js';

const router = express.Router();

router.get('/user', getUserTransactions);
router.get('/', getTransactions);
router.post('/', payment);

export default router;