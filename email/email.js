const nodeMailer = require("nodemailer")

const transporter = nodeMailer.createTransport({
    service:"gmail",
    secure:true,
    auth:{
        user:"danamonuraalhaji@gmail.com",
        pass:"pjke mmhi qtmr qgmg"
    }
})

 

const emails =async(from,to,subject,html)=>{
    try {
        await transporter.sendMail({
                    from:from,
                    to:to,
                    subject:subject,
                    html:html
        })
        console.log("sent successfully") 
    } catch (error) {
        console.log(error)
    }
   
}
module.exports = emails