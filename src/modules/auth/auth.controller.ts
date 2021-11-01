import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { UserModel, IUser } from '../users/user.model';
import { JWT } from '../../../config/jwt';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.status(404).send({ message: "User Not found." });
  }

  const passwordIsValid = await bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password!"
    });
  }

  const token = await JWT.createToken({ _id: user.id });

  return res.status(200).json({
    data: {
      id: user._id,
      username: user.name,
      email: user.email,
      accessToken: token
    }
  });
}

export {
  login
};