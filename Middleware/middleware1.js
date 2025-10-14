const express = require('express');
const app = express();

const PORT = 3000; 

app.use((req, res, next) => {                         //use=run 1st
  console.log('1️⃣ App-level middleware');
  next(); 
});

app.use((req, res, next) => {
  console.log('2️⃣ Second middleware');
  next(); 
});

app.get('/', (req, res) => {
  console.log('3️⃣ Route handler reached');
  res.send('Hello from app!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});