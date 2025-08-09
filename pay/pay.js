const https = require('https')

const payment = async(req ,res)=>{
  const {email,amount}  = req.body
  
  const params = JSON.stringify({
  "email": "danamonuraalhaji@gmail.com",
  "amount":5000
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    Authorization: `Bearer ${process.env.SECRET_KEY}`,
    'Content-Type': 'application/json'
  }
}

const reqPay = await https.request(options, resPay => {
  let data = ''
  console.log(resPay)
  resPay.on('data', (chunk) => {
    data += chunk
  });

  resPay.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', error => {
  console.error(error)
})

reqPay.write(params)
reqPay.end()
}

module.exports = {payment}