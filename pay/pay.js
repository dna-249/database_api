const https = require('https')
const {message } = require("../email/email")
const {Payer} = require("../model/model")
const payment =(q,r)=>{
  
  const {email,amount} = q.body
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
    r.json(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})

req.write(params)
req.end()
}

const verify = async(q,r)=>{
  const {name,phone,email} = q.body
  await Payer.create({
    name:name,
    phone:phone,
    email:email
  })
  console.log("created")
       message(name,phone,email)

       console.log("hello world")
}



module.exports = {payment,verify}