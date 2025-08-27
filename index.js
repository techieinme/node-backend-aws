const express = require('express');
const app = express()
const PORT = 3000;
app.use((req,res,next)=>{
  console.log(req.baseUrl,"middleware")
  next()
})
app.use(express.json());

app.get('/',(req,res)=>{
  res.json({
    "message":"hello world!! node deploy ec2"
  })
})
app.listen(PORT,()=>{
  console.log("Backend app started at 30000")
})
