const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://khushijain11april_db_user:khushi123@cluster0.yn1lo5l.mongodb.net/houserent")
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err))
.then(()=>console.log("DB Connected"))

app.get("/", (req,res)=>{
    res.send("API Running")
})

app.listen(5000, ()=>console.log("Server running"))