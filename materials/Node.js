const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const PORT = 3000;

// Middleware to enable CORS for a specific origin
const corsOptions = {
    origin: 'http://127.0.0.1:5500', // Allow this specific origin
    methods: ['GET', 'POST'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
};

app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle the POST request
app.post('/send', async (req, res) => {
    const { name, email, message } = req.body;

    // Nodemailer setup with Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'subashbhandari11111@gmail.com', // Your Gmail address
            pass: 'lzai csaf stxr wefd', // Use App password instead of your Gmail password
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: 'subashbhandari11111@gmail.com', // Your Gmail address
        subject: `Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send message' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
