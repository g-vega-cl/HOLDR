import express from 'express';

import {payment, getTransactions} from '../controllers/stripe.js';

const router = express.Router();

router.get('/', getTransactions);
router.post('/', payment);

export default router;