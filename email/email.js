const nodeMailer = require("nodemailer")
const ejs        = require("ejs")



 

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
     try {
      const html =  await ejs.renderFile(__dirname +"/email"+".ejs",{name:name,msg:msg,phone:phone},{async:true})
  
        await transporter.sendMail({
        to:"eruditeacademyonline@gmail.com",
        subject:name,
        html:html
        })
        const html2 =  await ejs.renderFile(__dirname +"/client"+".ejs",{name:name,msg:msg,phone:phone},{async:true})
  
        await transporter.sendMail({
        to:to,
        subject:"Erudite Online Academy",
        html:html2
        })

        res.json("sent successfully") 
    } catch (error) {
        console.log(error)
    }
   
}
 
module.exports = {
    emails
}