const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submission
app.post('/api/contact', async (req, res) => {
    try {
        const formData = req.body;

        formData.access_key = 'f8a9e3e8-f228-410d-b4ce-eddec9d9cad2';

        const response = await axios.post('https://api.web3forms.com/submit', formData, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        if (response.data.success) {
            return res.status(200).json({ success: true, message: 'Email sent successfully!' });
        } else {
            return res.status(500).json({ success: false, message: 'Failed to send email' });
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
