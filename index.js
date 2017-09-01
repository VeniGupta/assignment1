var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require('morgan');
var fs = require('fs')
var path = require('path')

app.set("view engine", "pug");
app.use("/", bodyParser.urlencoded({extended:false}) );
app.use("/static", express.static(__dirname));
app.use("/static", express.static(__dirname+"/assets"));
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}));

app.post("/submit", function(req,res)
{
    //console.log(req.body);
    var dob= Date.parse(req.body.dob);
    var oneDay = 24*60*60*1000;
    var currentDate = new Date();

    var diffDays = Math.round(Math.abs((currentDate.getTime() - dob)/(oneDay)));
    //console.log(diffDays);

    res.render(
        "index",
        { name : req.body.firstname, days : diffDays}
        // message: " Hey " + req.body.firstname +" you have lived on this planet "+ diffDays +" days"}

    );
});


app.listen(3000);
