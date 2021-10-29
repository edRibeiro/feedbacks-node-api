import * as express from 'express';
import feedbacksRoute from './modules/feedbacks/feedback.routes';

const router = express.Router();

router.use('/feedbacks', feedbacksRoute);

router.all('/', (req, res) => {
  return res.status(200).json({ msg: 'Services are up!' });
});

export default router;