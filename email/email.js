const nodeMailer = require("nodemailer")



 

 const emails =async(req,res)=>{
    const transporter = nodeMailer.createTransport({
    service:"gmail",
    secure:true,
    auth:{
        user:"danamonuraalhaji@gmail.com",
        pass:"pjke mmhi qtmr qgmg"
    }
})
    const {from,to,subject,html} = req.body
    try {
        await transporter.sendMail({
                    from:from,
                    to:to,
                    subject:subject,
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