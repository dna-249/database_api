const nodeMailer = require("nodemailer")



 

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
     try {
        await transporter.sendMail({
        from:to,
        to:from,
        html:`<html lang="en">
                    <head>
                              <title>Erudite Online Academy</title>
                    </head>
                        <body>
                            <div> 
                               <img src="bg_eoa.jpg" alt="" width={200} height={180}/>
   
                                <h3> ${name} </h3>
                                <p>${msg}</p>
                                <p> you can contact me through 
                                <span style='fontWeight:"bold",color:"green">
                                 ${phone} </span></p>
                            </div>
                        </body>
                    </html>`
        })

        res.json("sent successfully") 
    } catch (error) {
        console.log(error)
    }
   
}
 
module.exports = {
    emails
}