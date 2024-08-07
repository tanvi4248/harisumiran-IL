const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables from .env file
const { createContacts } = require("../db/sqlHelperFunctions/contacts");
router.post("/send-email", async (req, res, next) => {
  try {
    // Create contacts if needed
    const contacts = await createContacts(req.body);
    // Send email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "test0501dev@gmail.com",
        pass: "test@0501",
      },
      debug: true, // Enable debugging
    });

    const mailOptions = {
      from: console.log(email),
      to: "test0501dev@gmail.com", // Use the email address provided in the request
      subject: console.log(subject), // Use the subject provided in the request
      text: console.log(`
        First Name: ${firstname}
        Last Name: ${lastname}
        Email: ${email}
        Message: ${message}
      `),
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent: " + info.response);
        res.send("Email sent successfully");
      }
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
