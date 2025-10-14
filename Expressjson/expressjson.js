const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
});

app.get('/submit', (req, res) => {
  res.send(`
    <h1>Submit Form</h1>
    <form action="/submit" method="POST">
      <label>Name: </label>
      <input type="text" name="name" required />
      <br><br>
      <label>Email: </label>
      <input type="email" name="email" required />
      <br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  console.log(`Form submitted: Name=${name}, Email=${email}`);
  res.send(`<h2>Form submitted successfully!</h2><p>Name: ${name}</p><p>Email: ${email}</p>`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});