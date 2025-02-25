const express=require('express');
const app=express();

//middleware
// app.use((req,res)=>{
//     //console.log(req);
//     res.send('<h1>response from server</h1>');
//    // console.log(res);
    
    
// })

//get
app.get('/thakgaye',(req,res)=>{
    res.send('<h1>response from my route-> thakna mana hai</h1>');
})
app.get('/changes',(req,res)=>{
    res.send("hello nidhi")
})

app.listen(8080,()=>{
    console.log('server is running at port 8080');
    
})