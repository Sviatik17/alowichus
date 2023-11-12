const express = require('express');
const path=require('path');

const app=express();

const PORT=3000;


app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})
app.get('/explore',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','explore.html'))
})
app.get('/order',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','order.html'))
})
app.get('/best',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','best.html'))
})
app.get('/instant',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','instant.html'))
})
app.get('/feedback',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','feedback.html'))
})

app.get('/footer',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','footer.html'))
})

app.listen(PORT,()=>{
    console.log(`Server is runnig at http:localhost:${PORT}`)
})