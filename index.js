var express=require("express");
var app=express();
app.set("view engine","ejs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var task=["play","run"];
//var complete=["removed tasks"];
app.get('/', function(req, res){
    res.render('index',{task:task,complete:complete});
});
app.post('/addtask', function (req, res) {
    var newTask=req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});
var complete=[];
app.post("/removetask",(req,res)=>{

    var completeTask = req.body.check;
    complete.push(completeTask);
    task.splice(task.indexOf(completeTask), 1);
    res.redirect("/");
});
app.listen(3290,()=>{
    console.log("server listening to some port...")
});