const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const app = express();

app.use(helmet()); // Sécurise les headers
app.use(cors()); // Frontend <-> Backend
app.use(express.json()); // Lit JSON

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/sharefoodlocal', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected'));

app.get('/', (req, res) => {
  res.json({ message: 'ShareFoodLocal API' });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});