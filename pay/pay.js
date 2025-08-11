const https = require('https')
const {message } = require("../email/email")

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

const verify =(q,r)=>{
  const {ref,name,phone,to} = q.body
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
    const response = JSON.parse(data) 
    if(response.data.status === 'success') {
       message(name,phone,to)
       r.json(response.data)
    } else {
      return r.json(response.data)
    }
   
  })
}).on('error', error => {
  console.error(error)
})
}



module.exports = {payment,verify}