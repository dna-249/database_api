const nodeMailer = require("nodemailer")
const ejs  = require("ejs")

 const emails =async(req,res)=>{
    const transporter = nodeMailer.createTransport({
    service:"gmail",
    secure:true,
    auth:{
        user:"eruditeacademyonline@gmail.com",
        pass:"mpns xdfj ubgi ycmo"
    }
})
    
    const {to,name,msg,phone} = req.body
    const from = "eruditeacademyonline@gmail.com"
    const html = ejs.renderFile(_dirname,"/template/email",{msg:msg,name:name,phone:phone})
     try {
        await transporter.sendMail({
        from:from,
        to:to,
        html:html
        })

        res.json("sent successfully") 
    } catch (error) {
        console.log(error)
    }
   
}
 
module.exports = {
    emails
}