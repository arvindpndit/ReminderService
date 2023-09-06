const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const repository = new TicketRepository();

const sendBasicEmail = async (from, to, subject, text) => {
  try {
    const response = await sender.sendMail({
      from,
      to,
      subject,
      text,
    });
  } catch (error) {
    console.log(error);
  }
};

const fetchPendingEmails = async () => {
  try {
    const response = await repository.getAll();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createTicket = async (data) => {
  try {
    const response = await repository.create(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createTicket,
};
