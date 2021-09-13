import {
  multerUploadLocal,
  multerUploadAWS,
} from "./src/middleware/multerUpload.middleware";

let client_port: any;
let multerUpload: any;

if (process.env.NODE_ENV === "production") {
  client_port = "some link from aws";
  multerUpload = multerUploadAWS;
} else {
  client_port = "http://localhost:3000";
  multerUpload = multerUploadLocal;
}

export { client_port, multerUpload };
