const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'isaacaku6@gmail.com', // Replace with admin email
        pass: '123456',       // Replace with app-specific password
    },
});

// API Endpoint to handle prayer requests
app.post('/api/prayer-request', async (req, res) => {
    const { name, email, request } = req.body;

    if (!name || !email || !request) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Email to admin
        await transporter.sendMail({
            from: email,
            to: 'isaacaku6@gmail.com', // Replace with admin's email
            subject: 'New Prayer Request',
            text: `Name: ${name}\nEmail: ${email}\nRequest: ${request}`,
        });

        // Auto-response email to user
        await transporter.sendMail({
            from: 'isaacaku6@gmail.com',
            to: email,
            subject: 'Thank You for Your Prayer Request',
            text: `Dear ${name},\n\nThank you for submitting your prayer request. Our team will pray for you and may reach out if needed.\n\nBest regards,\nPrayer Counseling Team`,
        });

        res.status(200).json({ message: 'Prayer request sent successfully.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send prayer request.' });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
