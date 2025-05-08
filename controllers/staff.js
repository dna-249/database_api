const mongoose = require('mongoose');
const jwt =require("jsonwebtoken")
const{ Staff} = require("../model/model")


const postStaff = async(req,res) => {
    const {name,password,email,classes,user,phone,key,message,subject,id,
          question,ans, a,b,c,d,session,term,date,type,image,time,activity
    } = req.body
    
     await Staff.create({

       
        key:key,
        name:name,
        user:user,
        password:password,
        phone:phone,
        email:email,
        class:classes,
        image:image,
        session:session,
        term:term,
        time:time,
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

        staffChat:[{
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

const getAllStaff = async (req,res) =>{
    try{
        const student = await Staff.find({})
        res.json(student)
    }catch(error){
        res.status(500).json({message:error.message})
    } 
    
}

const getOneStaff =  async(req,res)=>{
    try{
    const {_id} = req.params;
    if(_id){
    const student = await Staff.findById({_id:_id})
    res.status(200).json(student)
     } else {
        const {classes} = req.params;
        const student = await Staff.findOne({class:classes})
    res.status(200).json(student)
    }
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const putOneStaffClass =  async(req,res)=>{
    try {
        const {_id}=req.params   
        const student = await Staff.findByIdAndUpdate({_id:_id}, req.body)
        
        if(!student){
            res.status(404).json("student not found")
        }

        res.status(200).json(student)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}


const putOneStaff =  async(req,res)=>{
    try {
        const {_id}=req.params   
         const {object2}=req.params
        const {subject,message,myId,question,ans, a,b,c,d,session,term,date,type}  = req.body
        const student = await Staff.findByIdAndUpdate({_id:_id}, {
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

const putSetStaff = async (req,res) => {
    const {_id} = req.params;
    const {object} = req.params;
    const {key} = req.params;
    const {index} = req.params;
    const {value} = req.body;
    const student =  await Staff.findOneAndUpdate({_id:_id},
        {$set:
          {
           [`${object}.${index}.${key}`]:value
        }
      })
      res.status(200).json(student)  
}

const putPullStaff = async (req,res) => {
    const {_id} = req.params;
    const {_id2} = req.params;
     const {object2}=req.params
      await Staff.findOneAndUpdate({_id},
        {$pull:
          {[`${object2}`]:{_id:_id2}}
      })
                    res.send("successfully uploaded")
                    
}
const putPushStaff=async (req,res)=>{
try {
    const {_id}=req.params   
     const {object2}=req.params
    const {subject,message,myId,date}  = req.body
    const student = await Staff.findByIdAndUpdate({_id:_id}, {
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



const deleteOneStaff =  async(req,res)=>{
    try {
        const {_id}=req.params
        const student = await Staff.findByIdAndDelete({_id:_id}, req.body)

        if(!student){
            res.status(404).json("student not found")
        }
        res.status(200).json(product)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

module.exports = {
    putOneStaffClass,
    getOneStaff,
    putOneStaff,
     getAllStaff,
      postStaff,
      putPullStaff,
       putPushStaff, 
       deleteOneStaff,
       putSetStaff
}