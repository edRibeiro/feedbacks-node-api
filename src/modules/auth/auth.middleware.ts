import { Request, Response, NextFunction } from "express";
import { JWT } from "../../../config/jwt";
import { UserModel } from "../users/user.model";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearerToken = req.headers.authorization!;

    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
    const decoded: any = JWT.validateToken(token);

    const user = await UserModel.findById(decoded);
    if (!user) throw new Error("1");
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: "UnAuthorized", error });
  }
};

export { verifyToken };
