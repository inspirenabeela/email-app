// Import the nodemailer module
const nodemailer = require('nodemailer');

// Create a transporter object with your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kothiyilnabeela@gmail.com',
    pass: 'lompqluenopyeqam',
  },
});

// Define the email content
const mailOptions = {
  from: 'kothiyilnabeela@gmail.com',
  to: 'gokul.nair@entri.me',
  subject: 'Hello from Nabeela k',
  text: 'This is an automatic email sent from a Node.js server.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});