var timerEl = document.getElementById('time');
var messageEl = document.getElementById('game-over');
var startEl = document.getElementById("myBtn");

var lapreguntaEl = document.querySelector("welcome");
var questDivEl = document.getElementById("questDiv");
var secondquestDivEl = document.getElementById("#secondQues");

var firstdivEl = document.getElementById("first-screen");

var wrong = 0;

var score=0;

var questionnumber = 0;

//,"What does Javascript"]

//let questions = [question1, "Inside which HTML element do we put the JavaScript?","What does Javascript"]

let questions = [
  { 
  question1: "What is Javascript?",
  choice1: "A programming language",
  choice2: " a style sheet language ",
  choice3:"HyperText markup language",
  answer: 1
},
{ 
  question2: "Inside which HTML element do we put the JavaScript?",
  choice1: " script ",
  choice2: "js",
  choice3:"javascript",
  answer: 1
},

{ question3: "What does Javascript do?", 
  choice1: "Create Structure", choice2: "Stilize the web", choice3:"Increase interactivity",
  answer: 3
}

];

//Timer
  
function countdown(time) {
  var timeLeft =time;
timeLeft-=wrong;
wrong=0;
  var timeInterval = setInterval(function () {

    if (timeLeft > 1) {
  
      timerEl.textContent = timeLeft + '  remaining,';
          timeLeft--;

        score = timeLeft;
    } else  if (timeLeft == 0 ) {

      clearInterval(timeInterval);
      timerEl.textContent = timeLeft + ' Time over';
   
    }
     
  }, 1000);
}

// START BUTTON 
startEl.addEventListener("click", function() {  
 

  countdown(99);
  start();
  
});

function end() {
timerEl.remove

  document.getElementById("question").remove();

    
  document.getElementById("finalForm").innerHTML += `<form action="">
    <label for="fname"> Save your score  </label><br>
    <input type="text" id="fname" name="fname" value="Initials"><br>
    <label for="lname">Score:</label><br>
    ${score}<br><br>
    <input type="submit" value="Submit"
  </form>`;
   
   
}

  
//FIRST QUESTION

function start() {
  var myobj = document.getElementById("myBtn");
  myobj.remove();
 

  document.getElementById("question").innerHTML += "1" +questions[0].question1;

  let btn1 = questDivEl.innerHTML += `<button id="btncorrect"> ${questions[0].choice1} </button>`;

   let btn2 = questDivEl.innerHTML += `<button> ${questions[0].choice2} </button>`;
   let btn3 = questDivEl.innerHTML += `<button> ${questions[0].choice3} </button>`;

 
questDivEl.addEventListener("click", function(event) {
  var element = event.target;
  event.stopPropagation();
  if (element.matches("#btncorrect")) {
 
    alert(" CORRECT ");
   element.closest('div').remove();
  
   secondQ();
  }else {
   
    element.closest('div').remove();
    alert(" WRONG ");
    secondQ();
  }
 
  
});
   
      ////end u func
}//end  First Question

function secondQ() {

  document.getElementById("question").innerHTML = "2" +questions[1].question2;
 
  let btn1 = firstdivEl .innerHTML += `<button id = "btncorrect"> ${questions[1].choice1} </button>`;  
   let btn2 = firstdivEl .innerHTML += `<button> ${questions[1].choice2} </button>`;
   let btn3 = firstdivEl .innerHTML += `<button> ${questions[1].choice3} </button>`;

  
//inicio

firstdivEl.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches("#btncorrect")) {
    var state = element.getAttribute("color: green");
    alert(" Third ");
   element.closest('div').remove();
  end();
  
  }else {
    element.closest('div').remove();
    alert(" WRONG ");
   end();
  } 
  
});
   
}

  
