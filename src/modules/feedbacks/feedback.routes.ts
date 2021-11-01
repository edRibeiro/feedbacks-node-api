import * as express from 'express';
import { createFeedback, getAllFeedbacks, getFeedback, updateFeedback } from './feedback.controller';

const router = express.Router();

router.get('/', getAllFeedbacks);
router.get('/:id', getFeedback);
router.post('/', createFeedback);
router.patch('/:id', updateFeedback);

export default router;