const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname , "public")));
app.set("view engine" , "ejs")

app.get("/" , (req , res)=>{

    res.send("Hey there")
})

app.listen(3000 , ()=>{
    console.log("SERVER STARTED");
})