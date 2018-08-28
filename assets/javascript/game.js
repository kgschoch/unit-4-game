$(document).ready(function(){

var wins = 0;
var losses = 0;
var targetScore;
var score = 0;

var millerLite;
var redStripe;
var eichhof;
var odouls;


function randomNumber() {
  targetScore = 19 + Math.floor(Math.random() * 102)
  millerLite = Math.ceil(Math.random() * 12)
  redStripe = Math.ceil(Math.random() * 12)
  eichhof = Math.ceil(Math.random() * 12)
  odouls = Math.ceil(Math.random() * 12)
  score = 0;
}

function displayAll () {
  $("#targetScore").text(targetScore);
  $("#win").text(wins);
  $("#lose").text(losses);
  $("#realScore").text(score);



}

randomNumber();
displayAll();

$("#1").on("click", function(){
  score = score + millerLite;
  $("#realScore").text(score);
  if(score > targetScore) {
    losses++;
    alert("You Lose!!! You Suck!!!");
    randomNumber();
    displayAll();
  }
  if(score === targetScore) {
    wins++;
    alert("You are Amazing and you win!");
    randomNumber();
    displayAll();
    }
})

$("#2").on("click", function(){
  score = score + redStripe;
  $("#realScore").text(score);
  if(score > targetScore) {
    losses++;
    alert("You Lose!!! You Suck!!!");
    randomNumber();
    displayAll();
  }
  if(score === targetScore) {
    wins++;
    alert("You are Amazing and you win!");
    randomNumber();
    displayAll();
    }
})

$("#3").on("click", function(){
  score = score + eichhof;
  $("#realScore").text(score);
  if(score > targetScore) {
    losses++;
    alert("You Lose!!! You Suck!!!");
    randomNumber();
    displayAll();
  }
  if(score === targetScore) {
    wins++;
    alert("You are Amazing and you win!");
    randomNumber();
    displayAll();
    }
})

$("#4").on("click", function(){
  score = score + odouls;
  $("#realScore").text(score);
  if(score > targetScore) {
    losses++;
    alert("You Lose!!! You Suck!!!");
    randomNumber();
    displayAll();
  }
  if(score === targetScore) {
    wins++;
    alert("You are Amazing and you win!");
    randomNumber();
    displayAll();
    }
})

})