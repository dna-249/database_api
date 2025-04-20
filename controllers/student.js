const mongoose = require('mongoose');
const {Student} = require("../model/model")


const postStudent = async(req,res) => {
    const {name,password,phone,email,user,key,classes,
           exam,test,ca,ass,image,
           mon,tue,wed,thu,fri,date
    } = req.body
     await Student.create({
           
        key:key,
        name:name,
        user:user,
        password:password,
        phone:phone,
        email:email,
        class:classes,
        image:image,
        attend:[{
                date:date,
                mon:mon,
                tue:tue,
                wed:wed,
                thu:thu,
                fri:fri,
                }],
                 
        Eng:[{
                exam:exam,
                test:test,
                ca:ca,
                ass:ass,
        }],
                 
        math:[{
                exam:exam,
                test:test,
                ca:ca,
                ass:ass,
        }],
        chem:[{
                exam:exam,
                test:test,
                ca:ca,
                ass:ass,
        }],
        phy:[{
                exam:exam,
                test:test,
                ca:ca,
                ass:ass,
        }],
        bio:[{
            exam:exam,
            test:test,
            ca:ca,
            ass:ass,
        }]

                
                 })
                 res.send("successfully uploaded")
                    
}

const getAllStudent = async (req,res) =>{
    try{
        const student = await Student.find({})
        res.json(student)
    }catch(error){
        res.status(500).json({message:error.message})
    } 
    
}

const getOneStudent =  async(req,res)=>{
    try{
    const {_id} = req.params;
    const student = await Student.findById(_id)
    res.status(200).json(student)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const putOneStudent =  async(req,res)=>{
    try {
       
        const {_id} = req.params
        const student = await Student.findByIdAndUpdate(_id, req.body)
        
        if(!student){
            res.status(404).json("student not found")
        }

        res.status(200).json(student)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

const putPullStudent = async (req,res) => {
    const {_id} = req.params;
    const {_id2} = req.params;
    const {eng,math,phy,chem,bio} = req.body;
    const student =  await Student.findOneAndUpdate({_id},
        {$pull:
          {attend:{_id:_id2}}
      })
      res.status(200).json(student)
                    
}

const putPushStudent = async (req,res) => {
try {
    const {_id} = req.params
    const {date} = req.body
    if(typeof date !== "undefined"){
    const student = await Student.findByIdAndUpdate({_id:_id},{
        $push:{
          attend:[
                 {date:date}]
        }
    })
      res.status(200).json(student)}
      else{
        const student = await Student.findByIdAndUpdate({_id:_id}, req.body)
        res.status(200).json(student)
      }
    } catch (error) {
        console.log(error) 
     }  
}

const putSetStudent = async (req,res) => {
    const {_id} = req.params;
    const {object} = req.params;
    const {key} = req.params;
    const {index} = req.params;
    const {value} = req.body;
    const student =  await Student.findOneAndUpdate({_id:_id},
        {$set:
          {
           [`${object}.${index}.${key}`]:value
        }
      })
      res.status(200).json(student)  
}

const deleteOneStudent =  async(req,res)=>{
    try {
        const {_id}=req.params
        const student = await Student.findByIdAndDelete({_id}, req.body)

        if(!student){
            res.status(404).json("student not found")
        }
        res.status(200).json(product)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

module.exports = {
    getOneStudent, 
    getAllStudent,
     postStudent,
     putPullStudent, 
     putPushStudent,
     putSetStudent,
     putOneStudent,
     deleteOneStudent
}