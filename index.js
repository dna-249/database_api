require("dotenv").config()
const express  = require("express");
const Port = process.env.PORT || 3000
const app = express()
const cors = require("cors");
const mongoose = require("mongoose")
const {studentRouter,managementRouter, staffRouter} = require("./router/router")

const corsConfig = {
    origin : ["https://database-cloud.vercel.app"],
    credential : true,
    methods : ["GET","POST","PUT","DELETE"],
    headers:["*"]
}

app.options("",cors(corsConfig))
app.use(cors(corsConfig))
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

mongoose.connect(process.env.secret).
then(()=> console.log("connected to database")).
catch(err => console.log(err))


app.get("/",(req,res)=>{
    res.send("hello  from backend")
    
})

app.use("/student", studentRouter)
app.use("/staff", staffRouter)
app.use("/management", managementRouter)



app.listen(Port, ()=>{
    console.log("server is Running")
    
})