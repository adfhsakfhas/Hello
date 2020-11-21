
const { randomInt } = require("crypto");
const Kahoot = require("kahoot.js-updated");

const fs = require("fs")

const { waitForDebugger } = require("inspector");

var stuff = require("../expressProject/data.json");





async function version1(){
    //var total = prompt('How many friends Lol  ');
    console.log(typeof(stuff))
    console.log(stuff)
    console.log()
    console.log(typeof(stuff.Pin))
    KahootPin = stuff.Pin;
    nameOfBots = stuff.Name;
    total = stuff.No;
    total = parseInt(total)

    //var nameOfBots = prompt('Name of friends why do i do this  ')
    //var KahootPin = prompt('Kahoot pin for friends to join  ')
    KahootPin = parseInt(KahootPin)
    console.log(typeof(total), typeof(KahootPin))
    n = stuff.No
    x = 0;
    let i = 0;
  const a = setInterval(()=>{
    const j = i + 1;
    const {client,event} = Kahoot.join(stuff.Pin,stuff.Name + "-" + (++i));
    event.then(()=>{
      console.log("Bot " + j + " joined!");
    }).catch((e)=>{
      console.log("Bot " + j + " failed to join:");
      console.log(e);
      client.leave();
    });
    client.on("quizStart", quiz => {
        console.log("The quiz has started! The quiz's name is:", quiz.name);
    });
    client.on("questionStart", question => {
        console.log("A new question has started, answering a random answer.");
        answerNo = randomInt(0, 4)
        question.answer(answerNo);
        console.log(answerNo, "  is what I picked I am cracked lol")
        setTimeout(100)
    });
    client.on("questionEnd", question =>{
        console.log("question Ended")
    });
    client.on("quizEnd", () => {
        console.log("The quiz has ended.");
    });
    client.on("Disconnect",(reason)=>{
      console.log("Bot " + j + " disconnected: " + reason);
    });
    if(i >= n){
      clearInterval(a);
    }
  },35);
  
};

version1()