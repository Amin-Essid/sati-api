"use strict";

// const mongoose = require("mongoose")
//   Journal = mongoose.model("Journal");
const nodemailer = require("nodemailer");

require("dotenv").config();

exports.send_email = async function (req, res) {
  console.log(req.body);
  const {
    firstName,
    lastName,
    code,
    province,
    city,
    address,
    number,
    email,
    files,
  } = req.body;
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  let mapedFiles = "";
  files.forEach((file) => {
    mapedFiles =
      mapedFiles +
      `<b>fileName: ${file.title}, author: ${file.author}</b><br/> `;
  });
  console.log(mapedFiles);

  let mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: "essidmohamedamin@gmail.com",
    subject: "Buy",
    text: "Hi from your nodemailer project",
    html: `
    <b>firstName: ${firstName}</b><br/>
    <b>lastName: ${lastName}</b><br/>
    <b>code: ${code}</b><br/>
    <b>province: ${province}</b><br/>
    <b>city: ${city}</b><br/>
    <b>address: ${address}</b><br/>
    <b>number: ${number}</b><br/>
    <b>email: ${email}</b><br/>
    <b>files:</b><br/> ${mapedFiles}
    `,
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

exports.send_offer = async function (req, res) {
  console.log(req.body);
  const {
    firstName,
    lastName,
    code,
    province,
    city,
    address,
    number,
    email,
    description,
  } = req.body;
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
    subject: "Sell",
    text: "Hi from your nodemailer project",
    html: `
    <b>firstName: ${firstName}</b><br/>
    <b>lastName: ${lastName}</b><br/>
    <b>code: ${code}</b><br/>
    <b>province: ${province}</b><br/>
    <b>city: ${city}</b><br/>
    <b>address: ${address}</b><br/>
    <b>number: ${number}</b><br/>
    <b>email: ${email}</b><br/>
    <b>description: ${description}</b><br/>
    `,
    // attachments: [
    //   {
    //     filename: fileOne.name,
    //     content: new Buffer(fileOne, "base64"),
    //     // contentType: "application/pdf",
    //   },
    // {
    //   // utf-8 string as an attachment
    //   filename: fileOne.name,
    //   content: fileOne,
    // },
    // {   // binary buffer as an attachment
    //     filename: 'text2.txt',
    //     content: new Buffer('hello world!','utf-8')
    // },
    // {   // file on disk as an attachment
    //     filename: 'text3.txt',
    //     path: '/path/to/file.txt' // stream this file
    // },
    // {   // filename and content type is derived from path
    //     path: '/path/to/file.txt'
    // },
    // {   // stream as an attachment
    //     filename: 'text4.txt',
    //     content: fs.createReadStream('file.txt')
    // },
    // {   // define custom content type for the attachment
    //     filename: 'text.bin',
    //     content: 'hello world!',
    //     contentType: 'text/plain'
    // },
    // {   // use URL as an attachment
    //     filename: 'license.txt',
    //     path: 'https://raw.github.com/andris9/Nodemailer/master/LICENSE'
    // },
    // {   // encoded string as an attachment
    //     filename: 'text1.txt',
    //     content: 'aGVsbG8gd29ybGQh',
    //     encoding: 'base64'
    // },
    // {   // data uri as an attachment
    //     path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
    // }
    // ],
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
