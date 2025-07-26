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
    const pic = `<img src="/bg_eoa.jpg" alt="" width={200} height={180}/>`
    try {
        await transporter.sendMail({
        from:from,
        to:to,
        html:`<html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Erudite Online Academy</title>
                        <style>
                          .center{
                              display:grid;
                              margin:auto;
                              align-items:center;
                              text-align:center;
                              background:alice-blue;
                              align-content:center;
                              justify-content:center;
                              justify-items:center;
                          }
                        </style>
                    </head>
                        <body>
                            <div class="center>
                                <h3> ${name} </h3>
                                <p>${msg}</p>
                                <p> you can contact me through <span style='fontWeight:"bold",color:"green">
                                 ${phone} </span></P>
                            </div>
                        </body>
                    </html>`
        })
         await transporter.sendMail({
        from:to,
        to:from,
        html:`<html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Erudite Online Academy</title>
                        <style>
                          .center{
                              display:grid;
                              margin:auto;
                              align-items:center;
                              text-align:center;
                              background:alice-blue;
                              align-content:center;
                              justify-content:center;
                              justify-items:center;
                          }
                        </style>
                    </head>
                        <body>
                            <div class="center>
                               ${pic}
                                <h3>Welcome to Erudite</h3>
                                <p>We are pleased to have you here!</p>
                                <p>We will get bact to you soon.</p>
                                <p>Thank you for contacting Erudite.</p>
                                
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