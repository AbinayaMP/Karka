const express = require('express');
const morgan = require('morgan'); 
const app = express();

const PORT = 3000;

app.use(morgan('dev'));  

// Simple routes
app.get('/', (req, res) => {
  res.send('Welcome to Home Page!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.post('/submit', (req, res) => {
  res.send('Form Submitted!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});