import * as express from 'express';
import { IUser, UserModel } from './user.model';

const router = express.Router();

router.get("/create", async (_req, res) => {
  const user = await UserModel.create({ name: "User Owner", email: 'owner.user@test.com', password: 'secret' });
  console.log(user);
  res.send({
    message: (user).toJSON,
  });
});

export default router;