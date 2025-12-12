import { type Request, type Response } from "express";

export const googleOAuthHandler = (req: Request, res: Response) => {
  
  console.log(req.user);
  res.send("Google OAuth successful! You can close this window.");
};
