const students = require("../Models/registrationModel");

//postdata
const postData = async (req, res) => {
  let profile = [];
  let idcard = [];
  if (req.files) {
    profile = req.files?.profile[0]?.filename;
    idcard = req.files?.idcards;
  }

  const idcardFilenames = idcard.map((file) => file.filename);

  const {
    studentname,
    mobilenumber,
    email,
    gender,
    coursemethod,
    dob,
    courses,
    country,
  } = req.body;
  if (
    !studentname ||
    !mobilenumber ||
    !email ||
    !gender ||
    !coursemethod ||
    !dob ||
    !country
  ) {
    res.status(400).json("all inputs required");
  } else {
    try {
      let studDetails = await students.findOne({ studentname });
      if (studDetails) {
        res.status(400).json("student detail already present");
      } else {
        let newStudentData = new students({
          studentname,
          mobilenumber,
          email,
          gender,
          coursemethod,
          dob,
          courses,
          country,
          profile,
          id: idcardFilenames,
        });

        await newStudentData.save();
        res.status(200).json(newStudentData);
      }
    } catch (error) {
      res.status(400).json("connection error");
    }
  }
};

const getData = async (req, res) => {
  try {
    const result = await students.find();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(400).json("no data available");
    }
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = {
  postData,
  getData,
};
