import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

export const signUp = async (req: Request, res: Response) => {
  //validar que no exista el nombre de usuario

  const userFound = await User.findOne({ username: req.body.username });
  if (userFound) return res.status(409).json({ message: "username already exists" });

  //validar nombre de uusario fin
  const user: IUser = new User({
    username: req.body.username,
    password: req.body.password,
  });
  user.password = await user.encryptPassword(user.password);
  const savedUser = await user.save();

  //creating token
  const token: string = await jwt.sign(
    { _id: savedUser._id },
    process.env.TOKEN_SECRET || "tokentest"
  );
  res.status(201).header("auth-token", token).json({message: 'user created', savedUser});
};

export const signIn = async (req: Request, res: Response) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(404).json({ message: "username not found" });

  const correctPassword: boolean = await user.validatePassword(
    req.body.password
  );
  if (!correctPassword) return res.status(400).json({ message: "password incorrect" });

  //creating token
  const token: string = await jwt.sign(
    { _id: user._id },
    process.env.TOKEN_SECRET || "tokentest"
  );
  
  res.header('auth-token', token).status(200).json({ message: "ok", user });
  
  
};

export const rutaPrueba = async (req: Request, res: Response) => {
    // const user = await User.findById(req.userId)

    // if (!user) return res.status(404).json({ message: 'no user found'});

    // res.status(200).json({ message: 'ok', user});
    res.send('uwu')
    
}
