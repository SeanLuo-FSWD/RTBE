import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const multerUploadAWS = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, //limit 10mb for storage
  },
});

const fileFilter = (req: any, file: any, cb: Function) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "./uploads/");
    cb(null, path.join(__dirname, "../public/uploads/"));
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const multerUploadLocal = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter,
});

export { multerUploadAWS, multerUploadLocal };
