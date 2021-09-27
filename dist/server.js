"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var auth_controller_1 = __importDefault(require("./src/modules/auth/auth.controller"));
var auth_service_1 = require("./src/modules/auth/auth.service");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var other_controller_1 = __importDefault(require("./src/modules/other/other.controller"));
var other_service_local_1 = require("./src/modules/other/other.service.local");
var server = new app_1.default([
    new auth_controller_1.default(new auth_service_1.AuthService()),
    new other_controller_1.default(new other_service_local_1.OtherServiceLocal()),
]);
server.start();
