require("dotenv").config()

const express  = require("express");
const Port = process.env.PORT || 3000
const app = express()
const cors = require("cors");
const mongoose = require("mongoose")
const {emailRouter,paymentRouter,studentRouter,managementRouter,teacherRouter, staffRouter} = require("./router/router");


const corsConfig = {
    origin : ["https://eruditeonlineacademy.vercel.app"],
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
then(()=> console.log("connected to database now")).
catch(err => console.log(err))


app.get("/",(req,res)=>{
    res.sendStatus("hello from backend")
})



app.use("/student", studentRouter)
app.use("/staff", staffRouter)
app.use("/teacher", teacherRouter)
app.use("/management", managementRouter)
app.use("/email", emailRouter)
app.use("/pay", paymentRouter)




app.listen(Port, ()=>{
    console.log("server is Running")
    
})