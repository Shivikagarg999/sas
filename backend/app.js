const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

connectDB(); // connect to MongoDB

app.use(cors({
  origin: ['http://localhost:3000', 'https://mentoroid.vercel.app'],
  credentials: true
}));

// middleware
app.use(express.json());

// routes
app.use('/api/tutors', require('./routes/tutorRoutes'));
app.use('/api/register', require('./routes/studentRoutes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));