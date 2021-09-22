var timerEl = document.getElementById('time');
var messageEl = document.getElementById('game-over');
var startEl = document.querySelector("#myBtn");

var lapreguntaEl = document.querySelector("welcome");
let botonEL = document.querySelector("button-div");
let pregunEL = document.querySelector("preguntasAqui");

var objeto = {answer:"a1", child1:"b", a2:"c", a3:"d"};

let questions = ["Inside which HTML element do we put the JavaScript?", "Second","Third"]

let answers = ["<script>", "<js>", "<javascript>" ]
const choices = [{

  a: 'yes',
  b: 'no',
  c: 'no',
  answer: 1,
  indd: 1 
},
{
a: 'choice1',
b: 'choice2',
c: 'choice2',
answer: 2,
indd: 1 
}];


var message =
  'GAME OVER';
var words = message;

function countdown() {
  var timeLeft = 21;

  var timeInterval = setInterval(function () {

    if (timeLeft > 1) {
  
      timerEl.textContent = timeLeft + ' seconds remaining,';
          timeLeft--;
          
    } else if (timeLeft === 1) {
  
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
   
      clearInterval(timeInterval);
      timerEl.textContent = timeLeft + ' Time over';
 
       displayMessage();
    }
  }, 1000);
}

function displayMessage() {
  var wordCount = 0;

  var msgInterval = setInterval(function () {
     
    clearInterval(msgInterval);
        messageEl.textContent = words;
    

  }, 1000);
}
// ------------START QUIZ----------------
function startQuest() {
    var myobj = document.getElementById("myBtn");
    myobj.remove();

   document.getElementById("question").innerHTML = "1" + questions[0];

    var a = document.getElementById("first-screen").innerText = "a" + answers[0];
  
    
    var newdiv = document.createElement("button");
   
    pregunEL.append (newdiv)

   

        
  


}


startEl.addEventListener("click", function() {  
 
    startQuest();
 countdown();//llama timer / Start Quiz


});





