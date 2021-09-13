import { Request, Response, NextFunction, Router } from "express";
// import {
//   multerUploadLocal,
//   multerUploadAWS,
// } from "../../middleware/multerUpload.middleware";
import fs from "fs";
import https from "https";
import { multerUpload } from "../../../env.config";

class OtherController {
  public path = "/other";
  public router = Router();

  constructor(private _otherService: any) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}/image`,
      // multerUploadLocal.single("productImage"),
      multerUpload.any(),
      this.saveImage
    );
  }

  private saveImage = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    let updatedUser = await this._otherService.saveImage(req.files, req);

    console.log("sssssssssssssssssssssssss");
    console.log(updatedUser);

    console.log("ddddddddddddddddddddddd");
    console.log(req.user);

    res.status(200).send(updatedUser);
  };
}

export default OtherController;
