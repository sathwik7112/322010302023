const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var request = require('request');
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/congnigent');
const app = express(); 
app.use(express.json());
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
request.post(
    'http://20.244.56.144/train/register',
    { json: {   'companyName': 'GITAM Vishnu 322010302023',
                'ownerName': 'vishnu sathwik',
                'rollNo': '3220103020233',
                'ownerEmail': 'sgurijal@gitam.in',
                'accessCode':'oJnNPG'
                } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
    );
request.post(
    'http://20.244.56.144/train/auth',
    { json: {   'companyName': 'GITAM vishnu',
                'cilentID':'2e661f7a-9b12-4ес1-b3b7-bc3ab13475ed',
                'ownerName': 'vishnu sathwik',
                'ownerEmail': 'sgurijal@gitam.in',
                'rollNo': '322010302023',
                'clientSecret':'tQBeDBVyDFfPWGaZ'} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
    );


app.listen(4040,function(){
    console.log("hiii 4040");
})
