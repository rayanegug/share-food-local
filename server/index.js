const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();

app.use(helmet()); // Sécurise les headers
app.use(cors()); // Frontend <-> Backend
app.use(express.json()); // Lit JSONj

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/sharefoodlocal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected'));

  app.use('/auth', authRoutes);
  
app.get('/', (req, res) => {
  res.json({ message: 'ShareFoodLocal API' });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});