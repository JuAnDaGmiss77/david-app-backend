import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface IPayload {
  _id: string;
  iat: number;
}
export const tokenValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("auth-token");
    if (!token) return res.status(401).json({ message: "Access denied " });

    const payload = jwt.verify(
      token,
      process.env.TOKEN_SECRET || "tokentest"
    ) as IPayload;

    // req.userId = payload._id;

    next();
  } catch (error) {
      res.status(500).send(error)
  }
};
