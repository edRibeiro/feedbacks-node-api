import * as express from 'express';
import feedbackRoutes from './modules/feedbacks/feedback.routes';
import userRoutes from './modules/users/user.routes';
import authRoutes from './modules/auth/auth.routes';

const router = express.Router();

router.all('/', (req, res) => {
  return res.status(200).json({ msg: 'Services are up!' });
});

router.use('/users', userRoutes);
router.use('/feedbacks', feedbackRoutes);
router.use('/auth', authRoutes);

export default router;