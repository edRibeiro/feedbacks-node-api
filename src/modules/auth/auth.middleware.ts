import { Request, Response, NextFunction } from 'express';
import { JWT } from '../../../config/jwt';
import { UserModel } from '../users/user.model';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearerToken = req.headers.authorization!;
    if (!bearerToken) {
      res.status(401).json({ success: false, message: "UnAuthorized" });
    }
    const token = bearerToken.split(" ")[2];
    const decoded: any = await JWT.validateToken(token);
    const user = await UserModel.findById(decoded);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "UnAuthorized" });
  }

}

export { verifyToken };