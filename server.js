const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, // Enable only if you plan to send cookies
}));
app.use(express.json()); // Parse JSON bodies

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Habits Tracker backend!');
});

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes')); // ✅ No need to require taskRoutes twice

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
