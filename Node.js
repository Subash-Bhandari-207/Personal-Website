const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure your transporter (use a Gmail account)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'subashbhandari11111@gmail.com', // Replace with your email
      pass: 'hpjt vqkq qcag iwcy', // Replace with your app password
    },
  });

  const mailOptions = {
    from: email,
    to: 'subashbhandari11111@gmail.com', // Replace with your email
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send message');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
