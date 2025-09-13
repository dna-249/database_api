
const {Payer} = require("../model/model")

const postPayer =async(req,res) =>{
     const {name,phone,email,date} = req?.body
       try {
         const client =  await Payer.create({
          name:name,
          phone:phone,
          email:email,
          date:date
     })
     res.json(client)
     } catch (error) {
        res.json(error)  
     }
    
}


const payer=  async(req,res)=>{
   try {
    const name = await Payer.find({})
        res.json(name)
   } catch (error) {
        console.log(error)
    
   }
}
module.exports = {payer,postPayer}