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
  const {data} = q.body
  if (data?.success === "success") {
  const name = await Payer.find({})
       message(name[0].email,name[0].name,name[0].phone)
} else{
       message("danamonuraalhaji@gmail.com","ABANDONED ","not successfull is abandoned")
}
  r.json(200)
}



module.exports = {payment,verify}