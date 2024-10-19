#!/usr/bin/node

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files (your HTML and assets)
app.use(express.static('public'));

// Email route
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create transporter for sending email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'maballans@gmail.com', // Replace with your Gmail address
      pass: 'Opensesame_1!' // Replace with your Gmail password or app password
    }
  });

  // Email options
  const mailOptions = {
    from: email,
    to: 'maballans@gmail.com', // Replace with your email to receive messages
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
