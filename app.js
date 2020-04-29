const express=require('express');
const api=require('./api/api.js');
const path = require('path');
/* const cors=require('cors'); */
const commonWords=require('./words/commonWords.json');
const wordArrayLen=commonWords.length;


const app=express();
/* app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
})); */


if(!process.env.MAIL_ADRESS || !process.env.MAIL_PASSWORD){
    throw new Error("MAIL_ADRESS and MAIL_PASSWORD need to be set in your env variables");
}

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

// manage users
app.use('/api',api)

// get random word
app.get('/randomword',(req, res)=>{
    // send a random item from the commonWords array
    return res.send(commonWords[Math.floor(Math.random()*wordArrayLen)])
})

app.get('*', (req, res) => {
    //res.sendFile(path.join(__dirname = 'client/build/index.html'));
    res.sendFile('index.html',{root: `${__dirname}/client/build`})
})



app.listen(process.env.PORT || 5000,()=>{
    console.log(`running on port ${process.env.PORT}`)
})