const express = require('express');
const app = express()
const PORT = 3000;
app.use((req,res,next)=>{
  console.log(req.baseUrl,"middleware here")
  next()
})
app.use(express.json());

app.get('/',(req,res)=>{
  res.json({
    "message":"hello world"
  })
})
app.listen(PORT,()=>{
  console.log("Backend app started at 30000")
})
