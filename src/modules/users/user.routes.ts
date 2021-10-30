import * as express from 'express';

const router = express.Router();

router.all('/', (req, res) => {
  return res.status(200).json({ msg: 'Services feedbacks are up!' });
});

export default router;