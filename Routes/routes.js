const express = require("express");

const { upload, multipleUpload } = require("../Middleware/MulterMiddleWare");
const router = new express.Router();
const { postData, getData } = require("../Controls/controller");

router.post("/student/upload_data", multipleUpload, postData);
router.get("/student/get_Data", getData);

module.exports = router;
