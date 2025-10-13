const express = require('express');
const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to Home Page!');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

// Contact route
app.get('/contact', (req, res) => {
  res.send('Contact us at: support@example.com');
});

app.get('/profile',(req,res)=>{
    res.send('This is the Profile Page');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});