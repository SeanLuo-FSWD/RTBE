import App from "./app";
import AuthController from "./src/modules/auth/auth.controller";
import { AuthService } from "./src/modules/auth/auth.service";
import dotenv from "dotenv";
dotenv.config();

import OtherController from "./src/modules/other/other.controller";
import { OtherServiceLocal } from "./src/modules/other/other.service.local";

const server = new App([
  new AuthController(new AuthService()),
  new OtherController(new OtherServiceLocal()),
]);

server.start();
