
const {Payer} = require("../model/model")

const payer=  async(req,res)=>{
   try {
    const name = await Payer.find({})
        res.json(name)
   } catch (error) {
        console.log(error)
    
   }
}
module.exports = {payer}