const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
const app = express();
const PORT = 3000;

dotenv.config();
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); // To serve static files like HTML, CSS

// Serve HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle form submission
app.post('/subscribe', async (req, res) => {
    const email = req.body.email;

    // Create a transporter object
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    });

    // Send email
    try {
        let info = await transporter.sendMail({
            from: '"DEV@Deakin" <EMAIL_USER>',
            to: email,
            subject: "Subscription Confirmation",
            html: `
            <h1>Thank you for subscribing!</h1>
            <p>You've successfully subscribed to DEV@Deakin.</p>
            `,
        });

        console.log("Message sent: %s", info.messageId);
        res.send("Subscription successful!");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Subscription failed. Please try again.");
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
