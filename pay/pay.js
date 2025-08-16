const https = require('https')
const {message } = require("../email/email")
const {Payer,Management} = require("../model/model")
const { response } = require('express')
const payment =(q,r)=>{
  
  const {email,amount} = q?.body
  const params = JSON.stringify({
  "email": email,
  "amount": amount *100,
  
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.SECRET_KEYS}`,
    'Content-Type': 'application/json'
  }
}

const req = https.request(options, res => {
  let data = ''
 
  res.on('data', (chunk) => {
    data += chunk
  });

  res.on('end', () => {
   const response = JSON.parse(data)
    r.json(response)
  })
}).on('error', error => {
  console.error(error)
})

req.write(params)
req.end()
}

const verify = async(q,r)=>{
const {email,ref,adm} = q.body
 const name = await Payer.findOne({email:email})
          await Management.findOneAndUpdate({_id:"681be0a2ab9060aece76aabd"},
        {$push:
            {[`admissions`]:{[`key`]:adm}}
        })
       await message(email,name.name,adm)
     
  r.json("mail sent")
}



module.exports = {payment,verify}