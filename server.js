const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

const connectDB = require("./services/connection");
connectDB();

const studentRouter = require('./routes/students');
app.use("/students", studentRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });