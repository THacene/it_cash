const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bank_app'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1);
    }
    console.log('MySQL connected...');
});

app.post('/register', async (req, res) => {
    const { firstName, lastName, email, password, phoneNumber } = req.body;

    const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(checkEmailQuery, [email], async (err, emailResults) => {
        if (err) {
            console.error('Error checking email:', err);
            return res.status(500).send('Server error');
        }

        if (emailResults.length > 0) {
            return res.status(400).send('Email already exists.');
        }

        const checkPhoneQuery = 'SELECT * FROM users WHERE phone_number = ?';
        db.query(checkPhoneQuery, [phoneNumber], async (err, phoneResults) => {
            if (err) {
                console.error('Error checking phone number:', err);
                return res.status(500).send('Server error');
            }

            if (phoneResults.length > 0) {
                return res.status(400).send('Phone number already exists.');
            }

            const hashedPassword = await bcrypt.hash(password, 8);

            const insertQuery = 'INSERT INTO users (first_name, last_name, email, password, phone_number) VALUES (?, ?, ?, ?, ?)';
            db.query(insertQuery, [firstName, lastName, email, hashedPassword, phoneNumber], (err, result) => {
                if (err) {
                    console.error('Error registering user:', err);
                    return res.status(500).send('Server error');
                }
                res.status(201).send('User registered');
            });
        });
    });
});

app.post('/check-phone', (req, res) => {
    const { phoneNumber } = req.body;

    const query = 'SELECT * FROM users WHERE phone_number = ?';
    db.query(query, [phoneNumber], (err, results) => {
        if (err) {
            console.error('Error checking phone number:', err);
            return res.status(500).send('Server error');
        }

        if (results.length > 0) {
            res.send({ exists: true });
        } else {
            res.send({ exists: false });
        }
    });
});

app.post('/login', async (req, res) => {
    const { phoneNumber, password } = req.body;

    const query = 'SELECT * FROM users WHERE phone_number = ?';
    db.query(query, [phoneNumber], async (err, results) => {
        if (err) {
            console.error('Error logging in:', err);
            return res.status(500).send('Server error');
        }

        if (results.length === 0) {
            return res.status(400).send('User not found');
        }

        const user = results[0];

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid password');
        }

        res.send({ success: true });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));