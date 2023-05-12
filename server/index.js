const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const hashed = require("bcrypt")
const mongoose = require("mongoose")

const port = 8000

const app = express()
app.use(express.json())
app.use(cors())



mongoose.connect('mongodb+srv://dta:qODIpP0bbXfmo81k@cluster0.nhrfzck.mongodb.net/?retryWrites=true&w=majority').then(()=> console.log("Connected"))
.catch(err => console.log("Error: ", err))

app.get("/"), require("./routes/authRoute")





app.listen(port, ()=>{
    console.log(`server is listening on Port ${port}`)
})