const express = require("express");
const { register } = require("./controllers/UserController");
const { dbConnection } = require("./database/config");
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

const port = 4000;
require("dotenv").config();

dbConnection();

app.post("/user", register);

app.listen(port, () => {
  console.log(`App listening at PORT:${port}`);
});
