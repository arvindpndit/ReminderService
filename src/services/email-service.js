const sender = require("../config/emailConfig");

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

module.exports = {
  sendBasicEmail,
};
