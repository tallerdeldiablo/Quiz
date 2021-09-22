var timerEl = document.getElementById('time');
var messageEl = document.getElementById('game-over');
var startEl = document.querySelector("#myBtn");

var lapreguntaEl = document.querySelector("welcome");
var botonEL = document.querySelector("button-div");



var questionnumber = 0;

var objeto = {answer:"a1", child1:"b", a2:"c", a3:"d"};

let questions = ["Inside which HTML element do we put the JavaScript?", " What is Javascript","Third","FOURTH"]

let answers = ["<script>", "<js>", "<javascript>" ,"A programming language", " a style sheet language ", "HyperText markup language", "<js>" ]
const choices = [{

  a: 'yes',
  b: 'no',
  c: 'no',
  answer: 1,
  indd: 1 },  { a: 'choice1', b: 'choice2', c: 'choice2', answer: 2, indd: 1 }];

var message =
  'GAME OVER';
var words = message;

function countdown() {
  var timeLeft =40;

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
// end timer 



/*

 function secondQuest() {
 
  var myobj = document.getElementById("myBtn");
   myobj.remove();

   document.getElementById("question").innerHTML = "1" + questions[1];

   // var a = document.getElementById("first-screen").innerText = "a" + answers[0];
      
   
   var btn1= document.createElement('button')
   btn1.id = 'button-div'
   btn1.textContent = "correcta"+answers[0];
   parent.insertAdjacentElement('beforebegin', btn1)
   btn1.addEventListener("click", () => {
    alert("Correct!");
    btn1.remove();
    btn2.remove();
    btn3.remove();
    questionnumber++;
    //secondQuest();
  });

   const parent2 = document.getElementById('preguntasAqui')
   const btn2= document.createElement('button')
   btn2.id = 'button-div2'
   btn2.textContent = answers[1];
   parent2.insertAdjacentElement('beforeend', btn2)
   btn1.addEventListener("click", () => {
    alert("WRONG!");
    btn1.remove();
    btn2.remove();
    btn3.remove();
    questionnumber++;
    //secondQuest();
  });

   const parent3 = document.getElementById('preguntasAqui')
   const ad3= document.createElement('button')
   ad3.id = 'button-div3'
   ad3.textContent = answers[2];
   parent3.insertAdjacentElement('beforebegin', ad3)
  
 
   //funcion click


}

*/


// ------------START QUIZ----------------
function startQuest() {
 
  var myobj = document.getElementById("myBtn");
   myobj.remove();

   document.getElementById("question").innerHTML = "1" + questions[0];

   // var a = document.getElementById("first-screen").innerText = "a" + answers[0];
      
   var parent = document.getElementById('preguntasAqui');
   var btn1= document.createElement('button')
   btn1.id = 'button-div'
   btn1.textContent = "a"+answers[0];
   parent.insertAdjacentElement('beforebegin', btn1)


  
   var parent2 = document.getElementById('preguntasAqui')
   var btn2= document.createElement('button')
   btn2.id = 'button-div2'
   btn2.textContent = "b" +answers[1];
   parent2.insertAdjacentElement('beforeend', btn2)

  
   var parent3 = document.getElementById('preguntasAqui')
   var btn3= document.createElement('button')
   btn3.id = 'button-div3'
   btn3.textContent = answers[2];
   parent3.insertAdjacentElement('beforeend', btn3)


   btn1.addEventListener("click", () => {
    alert("WRONG!");
   btn1.remove();
   btn2.remove();
   btn3.remove();
   questionnumber++;
  // secondQuest();
  
  });
  btn2.addEventListener("click", () => {
    alert("WRONG!");
   btn1.remove();
   btn2.remove();
   btn3.remove();
   questionnumber++;
   //secondQuest();
   
 });


 
   //funcion click


}



startEl.addEventListener("click", function() {  
 


    startQuest();
    
 countdown();//llama timer / Start Quiz


});





