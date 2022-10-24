const express = require('express');
const cors = require('cors');
//body-parser를 하지 않으면 req의 body를 읽을 수 없다.
const bodyParser = require('body-parser');


const app = express();
//header를 직접 작성할 수도 있지만 cors 라이브러리를 사용하는 것이 가장 간편하다.
//하지만 외부에서 접근가능한 보안 이슈가 있기 때문에 option을 설정해서 접근 가능한 host를 제한하는 것이 맞다. 
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