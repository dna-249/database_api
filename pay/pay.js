const https = require('https')

const payment = async(req ,res)=>{

  
  const params = JSON.stringify({
  "email": "customer@email.com",
  "amount": "20000"
})

const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: '/transaction/initialize',
  method: 'POST',
  headers: {
    Authorization: 'Bearer sk_test_175e128554712fc5604861305f974a8a564a5917',
    'Content-Type': 'application/json'
  }
}

const reqPay = await https.request(options, resPay => {
  let data = ''
 res.json(resPay)
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