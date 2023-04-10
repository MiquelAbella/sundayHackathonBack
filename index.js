const express = require("express");
const { register, login } = require("./controllers/UserController");
const { dbConnection } = require("./database/config");
const { addShoppingItems, getAllShoppingItems } = require("./controllers/ShoppingItemsController");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;
require("dotenv").config();

dbConnection();

app.post("/user", register);
app.post("/getuser", login)
app.post("/additem", addShoppingItems )
app.post("/getitems", getAllShoppingItems )

app.listen(port, () => {
  console.log(`App listening at PORT:${port}`);
});
