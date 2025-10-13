const express = require('express');
const app = express();
const PORT = 4000;

app.get('/user', (req, res) => {
  const user = {
    name: 'Subin',
    age: 25,
    role: 'Developer'
  };
  res.json(user); // Sends JSON data
});

app.get('/contact',(req,res)=>{
    const contact={
        phone:1234567890,
        email:"sfgg@123",
        linkedin:"http://linkedin/dffd12"
    };
    res.json(contact);
});

app.get('/skills',(req,res)=>{
    const skills={
        frontend:"html,css,react,js",
        backend:"node.js,express.js",
        database:"mongodb,firebase"
    };
    res.json(skills);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});