import { Request, Response, NextFunction, Router } from "express";
import passport from "../../util/passport/passport.google";
import { client_port } from "../../../env.config";
export class AuthService {
  public googleLogin(req: Request, res: Response, next: NextFunction) {
    passport.authenticate("google", {
      scope: ["email", "profile"],
    })(req, res, next);
  }

  public googleLoginRedirect(req: Request, res: Response, next: NextFunction) {
    passport.authenticate("google", {
      successRedirect: client_port,
      failureRedirect: `${client_port}/login`,
    })(req, res, next);
  }
}
