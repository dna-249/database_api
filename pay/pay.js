const https = require('https')
const {message } = require("../email/email")
const {Payer,Management} = require("../model/model")
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
const options = {
  hostname: 'api.paystack.co',
  port: 443,
  path: `/transaction/timeline/${ref}`,
  method: 'GET',
  headers: {
    Authorization: `Bearer ${process.env.SECRET_KEYS}`,
    'Content-Type': 'application/json'
  }
}

const req = https.get(options, res => {
  let data = ''
 
  res.on('data', (chunk) => {
    data += chunk
  });

  res.on('end', async() => {
    const response = JSON.parse(data)
    console.error(response)
    console.error(response.data.success)
  
     if (response?.data?.success === true) {
        const name = await Payer.findOne({email:email})

          await Management.findOneAndUpdate({_id:"681be0a2ab9060aece76aabd"},
        {$push:
            {[`admissions`]:{[`key`]:adm}}
        }
      )

       message(email,name.name,adm)
      } else{
      r.json("unsuccessful payment")
}
  })
}).on('error', error => {
  console.error(error)
})

req.end()

  r.json(200)
}



module.exports = {payment,verify}