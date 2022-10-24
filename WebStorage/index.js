const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

let job;
app.get('/',(req,res)=>{
    fs.readFile('index.html',(err, data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data);
    })
})
app.post('/job', function(req, res){
    job = req.body.job;
    res.cookie('job',job);
    res.redirect('/mypage');
})

app.get('/mypage',function(req,res){
    fs.readFile('mypage.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data);
    })
})

app.listen(3000,()=>{
    console.log('server runnin at port: 3000..')
})
// window.localStorage.setItem()