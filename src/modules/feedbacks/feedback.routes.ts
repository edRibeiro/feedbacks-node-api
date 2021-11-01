import * as express from 'express';
import { createFeedback, getAllFeedbacks, getFeedback, updateFeedback } from './feedback.controller';
import { verifyToken } from '../auth/auth.middleware';

const router = express.Router();

router.get('/', verifyToken, getAllFeedbacks);
router.get('/:id', verifyToken, getFeedback);
router.post('/', verifyToken, createFeedback);
router.patch('/:id', verifyToken, updateFeedback);

export default router;