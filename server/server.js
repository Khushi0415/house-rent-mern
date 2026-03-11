const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err)).then(()=>console.log("DB Connected"))
.catch(err=>console.log(err))
.then(()=>console.log("DB Connected"))

app.get("/", (req,res)=>{
    res.send("API Running")
})

app.listen(5000, ()=>console.log("Server running"))