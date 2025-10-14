const express = require('express');
const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log('App-level middleware');
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to Home Page!');
});

app.get('/about', (req, res) => {
  res.send('About Us Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

app.post('/submit', (req, res) => {
  res.send('Form submitted!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});