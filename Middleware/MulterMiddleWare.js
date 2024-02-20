const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/image");
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}-${file.originalname}`);
  },
});

const filterFile = (req, file, callback) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    callback(null, true);
  } else {
    // callback(null, false);
    return callback(new Error("only accepts png/jpg/jpeg format files"));
  }
};

//storage:storage

const upload = multer({
  storage,
  filterFile,
  limits: { fileSize: "10000000" },
});
//maxcount:how many file you want to upload
let multipleUpload = upload.fields([
  { name: "profile", maxCount: 10 },
  { name: "idcards", maxCount: 10 },
]);
module.exports = { upload, multipleUpload };
