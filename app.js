const express = require('express');
const path=require('path');
const bodyParser=require('body-parser');
const fs=require('fs');
const TelegramBot =require('node-telegram-bot-api');
const nodemailer=require('nodemailer');
require('dotenv').config();

const app=express();

const PORT=3000;

const TOKEN ='6712446846:AAEZ2g_Xj4rjkae9QhAdaxk8MNMy6ZDj9c8';
const chatID ='5282072041';
const bot =new TelegramBot(TOKEN,{polling:false});
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

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
app.post('/saveemail',(req,res)=>{
    const email=req.body.email;
  
    console.log(email)
    fs.appendFile('emails.txt',`${email}\n`,'utf8',(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Емеіл записано')
        }
    })
    bot.sendMessage(chatID,email);

    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.USER,
            pass:process.env.PASSWORD
        }
    })

    const mailOPtions={
        from:'google@admin.com',
        to:`${email}`,
        subject:'Вітання!',
        text:'Вітаємо'
    }
    transporter.sendMail(mailOPtions,(err,data)=>{
        if(err){
            console.error(err);

        }else{
            console.log(`Email sent :${data.response}`)
        }

    })
})

app.listen(PORT,()=>{
    console.log(`Server is runnig at http:localhost:${PORT}`)
})