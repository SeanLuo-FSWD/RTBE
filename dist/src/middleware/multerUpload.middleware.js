"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerUploadLocal = exports.multerUploadAWS = void 0;
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var uuid_1 = require("uuid");
var multerUploadAWS = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024, //limit 10mb for storage
    },
});
exports.multerUploadAWS = multerUploadAWS;
var fileFilter = function (req, file, cb) {
    // reject a file
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        // cb(null, "./uploads/");
        cb(null, path_1.default.join(__dirname, "../public/uploads/"));
    },
    filename: function (req, file, cb) {
        cb(null, (0, uuid_1.v4)() + path_1.default.extname(file.originalname));
    },
});
var multerUploadLocal = (0, multer_1.default)({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10,
    },
    fileFilter: fileFilter,
});
exports.multerUploadLocal = multerUploadLocal;
