const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

const auth = require("./routes/auth");

app.use("/", auth);
app.use("/create", auth);

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connection working");
});
app.listen(8081, () => {
  console.log("Listening on 8081");
});
