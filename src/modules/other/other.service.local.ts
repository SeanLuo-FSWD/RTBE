import fs from "fs";
import { PrismaClient } from ".prisma/client";
import { Request } from "express";

export class OtherServiceLocal {
  constructor(private user = new PrismaClient().user) {}

  public async saveImage(files: any, req: any) {
    const updatedUser = await this.user.update({
      where: { id: req.user.id },
      data: {
        profileImg: "uploads/" + files[0].filename,
      },
    });

    return updatedUser;
  }
}
