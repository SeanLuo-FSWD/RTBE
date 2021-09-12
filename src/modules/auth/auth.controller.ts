import { Request, Response, NextFunction, Router } from "express";

class AuthController {
  public path = "/auth";
  public router = Router();

  constructor(private _authService: any) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/authenticate`, this.authenticate);
    this.router.get(`${this.path}/google/callback`, this.googleLoginRedirect);
    this.router.get(`${this.path}/google`, this.googleLogin);
    this.router.get(`${this.path}/logout`, this.logout);
  }

  private authenticate = async (req: Request, res: Response) => {
    res.status(200).send(req.user);
  };

  private googleLoginRedirect = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    this._authService.googleLoginRedirect(req, res, next);
  };

  private googleLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    this._authService.googleLogin(req, res, next);
  };

  private logout = async (req: Request, res: Response) => {
    req.logout();
    res.sendStatus(200);
  };
}

export default AuthController;
