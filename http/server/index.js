const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send({data:'hello'});
})

const port = 5000;
app.listen(port,()=>console.log(`server:${port} is running now`));