var express=require('express')
var app=express()
var jwt = require('jsonwebtoken')
var fs = require('fs');
var mongoose = require('mongoose')
var dotnev= require('dotenv')
var bodyParser = require('body-parser')
var router=require('./routes/api')
var request =require('request')

// function main()=>{}

dotnev.config()
app.use(logger)
app.use(bodyParser.json())

mongoose.connect(process.env.DB_CONNECTION    ,
 {useNewUrlParser: true,useUnifiedTopology:true},()=>{
     console.log('Conected to DB')
 });

 var optiens={
     method:"GET",
     url:""
    //  ,json:{}
 }
 return new Promise(function(resolve,reject){
    request(optiens,function(err,res,body){
        if(err)
        {
            console.error(err);
            reject(err)
        }
        console.log(body);
        resolve(body)
    })
 })


function  logger(req,res,next) {
    req.admin=req.originalUrl.includes("admin") 
    if(req.admin){
        res.send("hello admin")
    }
    next()   
}

app.use('/api',router)

app.listen(5000,()=>{
    console.log("listening to port 5000")
})

app.get('/sign-in',(req,res)=>{
    fs.readFile('./views/signIn.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('file not found');
        } else {
            res.write(data);
        }
        res.end();
    });
})


app.set('view engine','ejs');
app.get('/search/:searchQuery',(req,res)=>
{
    res.render('index'
    ,{data:{
        searchQuery:req.params.searchQuery,
        searchResults:["aaaaa","bbbbb","cccccccc"],
        loggedIn:true,
        userName:"asdafgc"
    }}
    )
})
app.get('/',(req,res)=>{
 
    res.send('Hello World!!')
})
app.get('/Index',(req,res)=>{
    
    res.send('Index')
});
app.get('/Home',(req,res)=>{
    
    res.send('Home')
});
app.get('/About',(req,res)=>{
    
    res.send('About')
});
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('<h1>Hello from Leader Help Center!</h1>');
// }).listen(3000);

const myFunction=()=>{
    let token=jwt.sign({name:'Esther'},'asdfgvb')
    console.log(token)
    let decoded = jwt.verify(token,'asdfgvb')
    console.log(decoded)
}
myFunction()



