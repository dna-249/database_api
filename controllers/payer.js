
const {Payer} = require("../model/model")

const postPayer =async(name,phone,email,date) =>{
       try {
          await Payer.create({
          name:name,
          phone:phone,
          email:email,
          date:date
     })
       console.log("created successfully")
     } catch (error) {
        console.log('error')  
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