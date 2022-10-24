const express = require('express');
const cors = require('cors');
//body-parser를 하지 않으면 req의 body를 읽을 수 없다.
const bodyParser = require('body-parser');


const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send({test:'hello'});
})
app.post('/',(req,res)=>{
    res.send({name:req.body.name});
})

const port = 5000;
app.listen(port, ()=>console.log(`${port}`));