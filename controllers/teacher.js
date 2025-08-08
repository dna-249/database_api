const mongoose = require('mongoose');
const jwt =require("jsonwebtoken")
const{ Teacher} = require("../model/model")


const postTeacher = async(req,res) => {
    const {name,password,email,classes,user,phone,key,message,subject,id,
          question,ans, a,b,c,d,session,term,date,type,image,time,activity,
          age,gender,address,link
        } = req.body
    
     await Teacher.create({

       
        key:key,
        name:name,
        user:user,
        password:password,
        phone:phone,
        email:email,
        age:age,
        gender:gender,
        address:address,
       class:[{class:classes}],
        subject:[{subject:subject}],
        image:image,
        session:session,
        term:term,
        time:time,
        linc:link,
        type:type,
        activity:activity,
        allChat:[{
            date:date,
            subject:subject,
            id:id,
            message:message,
        }],
        managementChat:[{
            date:date,
            subject:subject,
            id:id,
            message:message,}],

        teacherChat:[{
            date:date,
            subject:subject,
            id:id,
            message:message,}],

        studentChat:[{
            date:date,
            subject:subject,
            id:id,
            message:message,}],

       
      Eng:[{
        question:question,
        a:a,
        b:b,
        c:c,
        d:d,
        ans:ans,
        session:session,
        term:term,
        date:date,
        type:type
  }],
  math:[{
    question:question,
    a:a,
    b:b,
    c:c,
    d:d,
    ans:ans,
    session:session,
    term:term,
    date:date,
    type:type
}],
chem:[{
    question:question,
    a:a,
    b:b,
    c:c,
    d:d,
    ans:ans,
    session:session,
    term:term,
    date:date,
    type:type
}],
phy:[{
    question:question,
    a:a,
    b:b,
    c:c,
    d:d,
    ans:ans,
    session:session,
    term:term,
    date:date,
    type:type
}],
bio:[{
    question:question,
    a:a,
    b:b,
    c:c,
    d:d,
    ans:ans,
    session:session,
    term:term,
    date:date,
    type:type
}]
   
                 })
                 res.send("successfully uploaded")
                    
}

const getAllTeacher = async (req,res) =>{
    try{
        const student = await Teacher.find({})
        res.json(student)
    }catch(error){
        res.status(500).json({message:error.message})
    } 
    
}

const getOneTeacher =  async(req,res)=>{
    try{
    const {_id} = req.params;
    if(_id){
    const student = await Teacher.findById({_id:_id})
    res.status(200).json(student)
     } else {
        const {classes} = req.params;
        const student = await Teacher.findOne({class:classes})
    res.status(200).json(student)
    }
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const putOneTeacherClass =  async(req,res)=>{
    try {
        const {_id}=req.params
        const {key}=req.params
        const {value}=req.params
        const {classes}= req.body   
        const student = await Teacher.findByIdAndUpdate({_id:_id},
         { $push:{[`${key}`]:{[`${value}`]:classes}}})
        
        if(!student){
            res.status(404).json("student not found")
        }

        res.status(200).json(student)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}


const putOneTeacher =  async(req,res)=>{ 
    try {
        const {_id}=req.params   
         const {object2}=req.params
        const {subject,message,myId,question,ans, a,b,c,d,session,term,date,type}  = req.body
        const student = await Teacher.findByIdAndUpdate({_id:_id}, {
            $push:{
                [`${object2}`]:[{question:question,
                                    a:a,
                                    b:b,
                                    c:c,
                                    d:d,
                                    ans:ans,
                                    session:session,
                                    term:term,
                                    date:date,
                                    type:type, 
                                    subject:subject,
                                    message:message,
                                    myId:myId
                                }]
            }
        })
        
        if(!student){
            res.status(404).json("student not found")
        }

        res.status(200).json(student)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

const putSetTeacher = async (req,res) => {
    const {_id} = req.params;
    const {object} = req.params;
    const {key} = req.params;
    const {index} = req.params;
    const {value} = req.body;
    const student =  await Teacher.findOneAndUpdate({_id:_id},
        {$set:
          {
           [`${object}.${index}.${key}`]:value
        }
      })
      res.status(200).json(student)  
}

const putPullTeacher = async (req,res) => {
    const {_id} = req.params;
    const {_id2} = req.params;
     const {object2}=req.params
      await Teacher.findOneAndUpdate({_id},
        {$pull:
          {[`${object2}`]:{_id:_id2}}
      })
                    res.send("successfully uploaded")
                    
}
const putPushTeacher=async (req,res)=>{
try {
    const {_id}=req.params   
     const {object2}=req.params
    const {subject,message,myId,date}  = req.body
    const student = await Teacher.findByIdAndUpdate({_id:_id}, {
        $push:{
            [`${object2}`]:[{
                                date:date,
                                subject:subject,
                                message:message,
                                myId:myId
                            }]
        }
    })
    
    if(!student){
        res.status(404).json("student not found")
    }

    res.status(200).json(student)
} catch (error) {
   res.status(500).json({message:error.message}) 
}
}



const deleteOneTeacher =  async(req,res)=>{
    try {
        const {_id}=req.params
        const student = await Teacher.findByIdAndDelete({_id:_id}, req.body)

        if(!student){
            res.status(404).json("student not found")
        }
        res.status(200).json(student)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

module.exports = {
    putOneTeacherClass,
    getOneTeacher,
    putOneTeacher,
     getAllTeacher,
      postTeacher,
      putPullTeacher,
       putPushTeacher, 
       deleteOneTeacher,
       putSetTeacher
}