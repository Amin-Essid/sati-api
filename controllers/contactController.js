"use strict";

// const mongoose = require("mongoose")
//   Journal = mongoose.model("Journal");
const nodemailer = require("nodemailer");

require("dotenv").config();

exports.send_email = async function (req, res) {
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: "essidmohamedamin@gmail.com",
    subject: "Nodemailer Project",
    text: "Hi from your nodemailer project",
    html: "<b>Hello world?</b>",
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
      res.json("Error " + err);
    } else {
      console.log("success");
      res.json("success");
    }
  });
};
