const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
//const { sendBasicEmail } = require("./services/email-service");
const jobs = require("./utils/job");
const TicketController = require("./controllers/ticket-controller");

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);

  app.listen(PORT, () => {
    console.log(`server is running  @ ${PORT}`);
    jobs();
    // sendBasicEmail(
    //   "hello@gmail.com",
    //   "coco1sunflower@gmail.com",
    //   "testing",
    //   "hello arvind , this is a testing mail"
    // );
  });
};

setupAndStartServer();
