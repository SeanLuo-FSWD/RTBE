import {
  multerUploadLocal,
  multerUploadAWS,
} from "./src/middleware/multerUpload.middleware";

let client_port: any;
let multerUpload: any;

if (process.env.NODE_ENV === "production") {
  client_port = "http://rmtlab-env.eba-vprm97ju.us-east-2.elasticbeanstalk.com";
  multerUpload = multerUploadAWS;
} else {
  client_port = "http://localhost:3000";
  // client_port = "http://localhost:8000";
  multerUpload = multerUploadLocal;
}

export { client_port, multerUpload };
