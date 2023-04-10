const express = require('express');
const { register } = require('./controllers/UserController');

const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/user', register)

app.listen(port, () => {
  console.log(`App listening at PORT:${port}`);
});