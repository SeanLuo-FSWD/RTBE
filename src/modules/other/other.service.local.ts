import fs from "fs";
import { PrismaClient } from ".prisma/client";
import { Request } from "express";

export class OtherServiceLocal {
  constructor(private user = new PrismaClient().user) {}

  public async saveImage(files: any, req: any) {
    console.log("OtherServiceLocal saveImage - files :");
    console.log(files[0]);
    console.log("req.user");

    console.log(req.user);

    const updatedUser = await this.user.update({
      where: { id: req.user.id },
      data: {
        profileImg: "uploads/" + files[0].filename,
      },
    });
    console.log("wtfffsssss");
    console.log("files[0].filename");
    console.log(files[0].filename);

    console.log("updatedUser");
    console.log(updatedUser);

    return updatedUser;
  }
}
