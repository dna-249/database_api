
const {Payer} = require("../model/model")

const payer=  async(req,res)=>{
   try {
    const name = await Payer.findByIdAndUpdate({_id:"689bfa81d855c7c3b58769f3"}, req.body)
        console.log(name)
   } catch (error) {
        console.log(error)
    
   }
}
module.exports = {payer}