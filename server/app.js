const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const addProductRouter = require("./routes/addproduct");
const sequelize = require('./utilities/database');

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(addProductRouter);

sequelize
  .sync()
  .then((res) => {
    app.listen(4000, () => {
      console.log("server is running on 4000....");
    });
  })
  .catch((err) => {
    console.log(err);
  });


