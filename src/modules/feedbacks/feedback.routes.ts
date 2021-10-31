import * as express from 'express';
import { createFeedback, getAllFeedbacks, getFeedback, updateFeedback } from './feedback.controller';

const router = express.Router();

router.get('/', getAllFeedbacks);
router.post('/', createFeedback);
router.get('/:id', getFeedback);
router.patch('/:id', updateFeedback);

export default router;