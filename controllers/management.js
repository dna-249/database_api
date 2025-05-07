
const { Management } = require("../model/model")


const postManagement = async(req,res) => {
    const {name,phone,password,email,user,adm,key,image,date,subject,message,myId} = req.body
     await Management.create({
                                key:key,
                                name:name,
                                user:user,
                                password:password,
                                phone:phone,
                                email:email,
                                image:image,
                                admissions:[{adm:adm}],
                                management:[{key:key}],
                                staff:[{key:key}],
                                classes:[{key:key}],

                                managementChat:[{
                                    date:date,
                                    subject:subject,
                                    message:message,
                                    myId:myId
                                }],

                                staffChat:[{
                                    date:date,
                                    subject:subject,
                                    myId:myId,
                                    message:message,
                                }],

                                allChat:[{
                                    date:date,
                                    subject:subject,
                                    message:message,
                                     myId:myId
                                }],
                                studentChat:[{
                                    date:date,
                                    subject:subject,
                                    message:message,
                                     myId:myId,}]
                                
                                })
                 console.log("successfully uploaded")
                    
}

const getAllManagement = async (req,res) =>{
    try{
        const student = await Management.find({})
        res.json(student)
    }catch(error){
        res.status(500).json({message:error.message})
    } 
    
}

const getOneManagement  =  async(req,res)=>{
    try{
    const {_id} = req.params;
    const student = await Management.findById({_id:_id})
    res.status(200).json(student)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const putOneManagement =  async(req,res)=>{
    try {
        const {_id}=req.params
        const student = await Management.findByIdAndUpdate({_id}, req.body)
        
        if(!student){
            res.status(404).json("student not found")
        }

        res.status(200).json(student)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

const putPullManagement = async (req,res) => {
    const {_id} = req.params;
    const {_id2} = req.params;
      await Management.findByIdAndUpdate({_id:_id},
        {$pull:
          {admissions:{_id:_id2}}
      })
                    res.send("successfully uploaded")
                    
}

const putPushManagement = async (req,res) => {
    const {_id} = req.params;
    const {key} = req.params;
    const {value} = req.params;
    const {adm} = req.body;
      await Management.findOneAndUpdate({_id},
        {$push:
            {[`${key}`]:{[`${value}`]:adm}}
        }
      )
                    console.log(res.json())
                    
}
 
const putPushManagementChat = async(req,res)=>{
    try {
        
                const {_id} =req.params;
                const {object} =req.params;
                const {date, subject,message, myId}= req.body;
                const student = await Management.findByIdAndUpdate({_id:_id},{
                    $push:{
                      [`${object}`]:[
                        {
                            date:date,
                            subject:subject,
                            message:message,
                            myId:myId
                        }]
                    }
                })
                  res.status(200).json(student)
    } catch (error) {
        res.json(error)
    }
}

const deleteOneManagement =  async(req,res)=>{
    try {
        const {id}=req.params
        const student = await Management.findByIdAndDelete(id, req.body)

        if(!student){
            res.status(404).json("student not found")
        }
        res.status(200).json(product)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

module.exports = {
    getOneManagement, 
    putOneManagement, 
    getAllManagement,
     postManagement,
     putPullManagement,
     putPushManagementChat,
      putPushManagement,
       deleteOneManagement
}