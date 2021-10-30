import * as express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  return res.status(200).json({ msg: 'Services feedbacks are up!' });
});

router.post('/refreshtoken', (req, res) => {
  return res.status(200).json({ msg: 'Services feedbacks are up!' });
});

export default router;