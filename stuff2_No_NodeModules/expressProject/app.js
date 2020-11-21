const express = require("express");
const app = express();
const path = require('path')
const BodyParser = require('body-parser')

const worker = require("worker_threads")
const fs = require("fs")

const { spawn } = require('child_process');
const { json } = require("body-parser");
const bat = spawn('cmd.exe', ['/c', 'my.bat']);




app.set('views', './views')
app.set("view engine", 'ejs')
app.use(BodyParser.urlencoded({ extended: true}))
app.use(BodyParser.raw())
app.use(BodyParser.json())

app.post("/form", async function(req,res){
    res.redirect('/')
    console.log(req.body)
    console.log("type ", typeof(req.body))
    var next = JSON.stringify(req.body)
    console.log(next)
    console.log(typeof(next))
    fs.writeFile('data.json', next, (err) => {
        if (err) throw err;
        console.log('Data written to file');
        spawn('cmd.exe', ['/c', 'my.bat']);
    });
    
})
app.get("/", async function(req, res){
    
    res.render("index", {text: "EJS OH YEH"})
});


app.listen(6969, async function (req, res){
    console.log("running...")
});