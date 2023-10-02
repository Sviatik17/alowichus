const express = require('express');
const path=require('path');

const app=express();

const PORT=3000;


app.use(express.static(path.join(__dirname,'public')));

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })
// app.get('/contact',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','contact.html'))
// })

app.listen(PORT,()=>{
    console.log(`Server is runnig at http:localhost:${PORT}`)
})