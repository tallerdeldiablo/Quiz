var timerEl = document.getElementById('time');
var messageEl = document.getElementById('game-over');
var startEl = document.querySelector("#myBtn");
//var firsScreenEl = document.getElementById("#title-question");

var lapreguntaEl = document.querySelector("welcome");
var questDivEl = document.getElementById("question");
var botonEL = document.querySelector("button-div");

var remo = document.getElementById("first-screen");

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
  choice1: "Style sheet language ",
  choice2: "Programming language",
  choice3:"HyperText markup language",
  answer: 2
},

{ question3: "What does Javascript do?", 
  choice1: "Create Structure",   choice2: "Stilize the web",   choice3:"Increase interactivity",
  answer: 3
}

];



//Timer
  
function countdown() {
  var timeLeft =5;

  var timeInterval = setInterval(function () {

    if (timeLeft > 1) {
  
      timerEl.textContent = timeLeft + '  remaining,';
          timeLeft--;
        
    } else  if (timeLeft == 0 ) {
   
     
/*
      clearInterval(timeInterval);
      timerEl.textContent = timeLeft + ' Time over';*/
      gameover();
      
       console.log(remo);
    }
  }, 1000);
}

function gameover() {
   
    
 
  var Text = prompt("Please enter your name", "AAA");
  if (Text != "" && Text != null) {
    Text = Text.trim (  );
    location.href = "scores.html";
} else {
    document.write ( "Error!" );
}


}

//GAME OVER
function gameover() {
   
  
  var Text = prompt("GAME OVER Please enter your name", "AAA");
  if (Text != "" && Text != null) {
    Text = Text.trim (  );
    location.href = "scores.html"


} /*else {
    document.write ( "Error!" );
}
*/

}



// end timer 

startEl.addEventListener("click", function() {  
 

  countdown();
  startQuest();
  
//llama timer / Start Quiz


});


function secondQuest() {
   
   
            
     
     let parent = document.getElementById('preguntasAqui');
     let btn1= document.createElement('button')
     btn1.id = 'button-div'
     btn1.textContent = answers[3];
     parent.insertAdjacentElement('beforebegin', btn1)
  
    
     let parent2 = document.getElementById('preguntasAqui')
     let btn2= document.createElement('button')
     btn2.id = 'button-div2'
     btn2.textContent = answers[4];
     parent2.insertAdjacentElement('beforeend', btn2)
  
    
     let parent3 = document.getElementById('preguntasAqui')
     let btn3= document.createElement('button')
     btn3.id = 'button-div3'
     btn3.textContent = answers[5];
     parent3.insertAdjacentElement('beforeend', btn3)
  
  
     btn1.addEventListener("click", () => {
      alert(" CORRECT ");
      btn1.remove();
    btn2.remove();
    btn3.remove();
   
     score++;
     thirdQuest();
    
    });
    btn2.addEventListener("click", () => {
      alert("WRONG!");
      btn1.remove();
      btn2.remove();
      btn3.remove();
      countdown(countdown-8);
     thirdQuest();
     
   });
   btn3.addEventListener("click", () => {
    alert("WRONG!");
    btn1.remove();
    btn2.remove();
    btn3.remove();
    countdown(countdown-8);
   thirdQuest();
   
  });
  
  
  
    
  
  }
 



var parent = document.getElementById('preguntasAqui');


// ------------START QUIZ----------------
function startQuest() {
 
  var myobj = document.getElementById("myBtn");
 myobj.remove();

  // document.getElementById("question").innerHTML = "1" + questions[0];

  //document.getElementById("question").innerHTML = questions[0].question1;
  questDivEl.innerHTML += `<h3> ${questions[0].question1} </h3>`;

  let btn1 = questDivEl.innerHTML += `<button> ${questions[0].choice1} </button>`;
   // document.createElement('button')
    
   let btn2 = questDivEl.innerHTML += `<button> ${questions[0].choice2} </button>`;
   let btn3 = questDivEl.innerHTML += `<button> ${questions[0].choice3} </button>`;
 
   btn1.addEventListener("click", () => {
    alert(" CORRECT ");
      parent.remove();
        secondQuest();
      })
      
        btn2.addEventListener("click", () => {
          alert("WRONG!");
          parent.remove();
              countdown += countdown -1;
              secondQuest();
        
          });
          btn3.addEventListener("click", () => {
          alert("WRONG!");
          parent.remove();
          
        secondQuest();
        countdown += countdown -1;
        gameover();
        });
}





  
//last


function thirdQuest() {
   
  var myobj = document.getElementById("myBtn");


   document.getElementById("question").innerHTML = "3" + questions[2];

  
   let btn1 = questDivEl.innerHTML += `<button> ${questions[0].choice1} </button>`;
   // document.createElement('button')
    
   let btn2 = questDivEl.innerHTML += `<button> ${questions[0].choice2} </button>`;
   let btn3 = questDivEl.innerHTML += `<button> ${questions[0].choice3} </button>`;
 
   btn1.addEventListener("click", () => {
    alert(" CORRECT ");
      parent.remove();
        secondQuest();
      })
      
        btn2.addEventListener("click", () => {
          alert("WRONG!");
          parent.remove();
              countdown += countdown -1;
              secondQuest();
        
          });
          btn3.addEventListener("click", () => {
          alert("WRONG!");
          parent.remove();
          
        secondQuest();
        countdown += countdown -1;
        gameover();
        });
}

              //end last

      function end() {
        
        let  finscore = score*countdown.value;
      
        var Text = prompt(" Score" +finscore+ " Please enter your name", "AAA");
        if (Text != "" && Text != null) {
          Text = Text.trim (  );
          location.href = "scores.html";
          localStorage.setItem("Text", Text);
         } 

      }
