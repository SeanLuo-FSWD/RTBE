import App from "./app";
import AuthController from "./src/modules/auth/auth.controller";
import { AuthService } from "./src/modules/auth/auth.service";
import dotenv from "dotenv";
dotenv.config();

const server = new App([new AuthController(new AuthService())]);

server.start();
