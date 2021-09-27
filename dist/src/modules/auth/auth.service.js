"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var passport_google_1 = __importDefault(require("../../util/passport/passport.google"));
var env_config_1 = require("../../../env.config");
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.googleLogin = function (req, res, next) {
        passport_google_1.default.authenticate("google", {
            scope: ["email", "profile"],
        })(req, res, next);
    };
    AuthService.prototype.googleLoginRedirect = function (req, res, next) {
        passport_google_1.default.authenticate("google", {
            successRedirect: env_config_1.client_port,
            failureRedirect: env_config_1.client_port + "/login",
        })(req, res, next);
    };
    return AuthService;
}());
exports.AuthService = AuthService;
