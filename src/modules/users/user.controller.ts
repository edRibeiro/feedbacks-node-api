import { Request, Response } from "express";
import { UserModel } from "./user.model";

const getProfile = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById(req.user.id);

    if (!user) {
      throw new Error(`User not found.`);
    }
    return res.status(201).json({ data: user });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

export { getProfile };
