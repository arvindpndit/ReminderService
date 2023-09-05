const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/email-service");

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`server is running  @ ${PORT}`);
    sendBasicEmail(
      "hello@gmail.com",
      "coco1sunflower@gmail.com",
      "testing",
      "hello arvind , this is a testing mail"
    );
  });
};

setupAndStartServer();
