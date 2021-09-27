"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerUpload = exports.client_port = void 0;
var multerUpload_middleware_1 = require("./src/middleware/multerUpload.middleware");
var client_port;
exports.client_port = client_port;
var multerUpload;
exports.multerUpload = multerUpload;
if (process.env.NODE_ENV === "production") {
    exports.client_port = client_port = "http://rmtlab-env.eba-vprm97ju.us-east-2.elasticbeanstalk.com";
    exports.multerUpload = multerUpload = multerUpload_middleware_1.multerUploadAWS;
}
else {
    // client_port = "http://localhost:3000";
    exports.client_port = client_port = "http://localhost:8000";
    exports.multerUpload = multerUpload = multerUpload_middleware_1.multerUploadLocal;
}
