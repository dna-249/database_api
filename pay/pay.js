const https = require('https')

const payment =(q,r)=>{
  
  
  const params = JSON.stringify({
  "email": "danamonuraalhaji@gmail.com",
  "amount": 50000 *100,
  
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

const verify =(q,r)=>{
  const {ref} = q.body
const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: `/transaction/verify/${ref}`,
  method: 'GET',
  headers: {
    Authorization: `Bearer ${process.env.SECRET_KEYS}`,
    'Content-Type': 'application/json'
  }
}

 https.get(options, res => {
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
}



module.exports = {payment,verify}