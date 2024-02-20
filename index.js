require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./Routes/routes");
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(router);

server.use("/studentdata", express.static("./public/image"));
require("./Connections/connections");

const port = 5000 || process.env.port;

server.listen(port, () => {
  console.log(`_EMS server Started at Port ${port}`);
});
