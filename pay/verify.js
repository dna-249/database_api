const https = require('https')

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


}

module.exports = {verify}