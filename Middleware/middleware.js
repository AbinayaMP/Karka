const express = require('express');         //require=function (express)=install
const app = express();

const PORT = 3000; 

app.use((req, res, next) => {               //next=function
  console.log('App-level middleware');
  next(); 
});

app.get('/', (req, res) => {                // /=path  ,app.get()=route
  res.send('Hello from app!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});