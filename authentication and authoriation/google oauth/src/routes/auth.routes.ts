import { Router } from "express";
import { googleOAuthHandler } from "../controllers/auth.controller.js";
import passport from "passport";

const authRouter = Router();

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  googleOAuthHandler
);

export default authRouter;
