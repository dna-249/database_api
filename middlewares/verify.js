const jwt = require("jsonwebtoken")
const {Staff} =require("../model/model")
const {Teacher} =require("../model/model")
const {Management} =require("../model/model")
const {Student} =require("../model/model")
exports.teacherVerify = async (req,res,next)=>{
    const {header,name,password} = req.body

    try {
       const token = await header;
       const teacher = await Teacher.findOne({name:name,password:password})
       if(!token){
        console.log("access denied")
       } 
       const verified = jwt.verify(token, process.env.secret)
       req.name = verified;
       req.password = verified;
       res.send(res.json(teacher))
       next()
    } catch (error) {
        console.log(error)
    }
}

exports.staffVerify = async (req,res,next)=>{
    const {header,name,password} = req.body

    try {
       const token = await header;
       const staff = await Staff.findOne({name:name,password:password})
       if(!token){
        console.log("access denied")
       } 
       const verified = jwt.verify(token, process.env.secret)
       req.name = verified;
       req.password = verified;
       res.send(res.json(staff))
       next()
    } catch (error) {
        console.log(error)
    }
}


exports.managementVerify = async (req,res,next)=>{
    const {header,name,password} = req.body

    try {
       const token = await header;
       const management = await Management.findOne({name:name,password:password})
       if(!token){
        console.log("access denied")
       } 
       const verified = jwt.verify(token, process.env.secret)
       req.name = verified;
       req.password = verified;

       res.send(res.json(management))
       next()
    } catch (error) {
        console.log(error)
    }
}

exports.studentVerify = async (req,res,next)=>{
    const {header,name,password} = req.body

    try {
       const token = await header;
       const student = await Student.findOne({name:name,password:password})
       if(!token){
        console.log("access denied")
       } 
       const verified = jwt.verify(token, process.env.secret)
       req.name = verified;
       req.password = verified;
       res.send(res.json(student))
       next()
    } catch (error) {
        console.log(error)
    }
}