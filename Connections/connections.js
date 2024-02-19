const mongoose = require("mongoose");

mongoose
  .connect(process.env.BASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("__mongodb connected");
  })
  .catch((error) => {
    console.log("connection error", error);
  });
