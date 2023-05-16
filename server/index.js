// main file
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const port = 3001;

//Middlewares
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false}))



const uri = process.env.MONGOOSE_URL

mongoose.connect(uri)
.then(() => console.log("Connected"))
.catch(err => console.log("Error: ", err));


app.use("/", require("./routes/authRoute"));

app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
