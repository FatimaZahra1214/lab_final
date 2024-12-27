const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Body parser middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tourism-db')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Connection Error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Tourism Management System API');
});

// Routes
app.use('/api/attractions', require('./routes/attractions'));
app.use('/api/visitors', require('./routes/visitors'));
app.use('/api/reviews', require('./routes/reviews'));

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 