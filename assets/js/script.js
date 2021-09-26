var timerEl = document.getElementById('time');
var messageEl = document.getElementById('game-over');
var startEl = document.querySelector("#myBtn");
//var firsScreenEl = document.getElementById("#title-question");

var lapreguntaEl = document.querySelector("welcome");
var botonEL = document.querySelector("button-div");

var remo = document.getElementById("first-screen");

var wrong = 0;

var score=0;

var questionnumber = 0;

let questions = ["What is Javascript?", "Inside which HTML element do we put the JavaScript?","What does Javascript"]

let answers = ["A programming language", " a style sheet language ", "HyperText markup language", "<script>", "<js>", "<javascript>" , "Create Structure", "Stilize the web", "Increase interactivity" ]
const choices = [{

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
  choice1: "A programming language",
  choice2: " a style sheet language ",
  choice3:"HyperText markup language",
  answer: 1
}];


//GAME OVER
  function gameover() {
   
    
 
      var Text = prompt("Please enter your name", "AAA");
      if (Text != "" && Text != null) {
        Text = Text.trim (  );
        location.href = "scores.html";
    } else {
        document.write ( "Error!" );
    }
    
   
  }


var message =
  'GAME OVER';
var words = message;

function countdown(time) {
  var timeLeft =time;

  var timeInterval = setInterval(function () {

    if (timeLeft > 1) {
  
      timerEl.textContent = timeLeft + ' seconds remaining,';
          timeLeft--;
          
    } else {
  
       clearInterval(timeInterval);
      timerEl.textContent = timeLeft + ' Time over';
      
       gameover();
       console.log(remo);
    }
  }, 1000);
}


//GAME OVER
function gameover() {
   
 
  var Text = prompt("GAME OVER Please enter your name", "AAA");
  if (Text != "" && Text != null) {
    Text = Text.trim (  );
    location.href = "scores.html"
} else {
    document.write ( "Error!" );
}


}



// end timer 

startEl.addEventListener("click", function() {  
 

  countdown(65);
  startQuest();
  
//llama timer / Start Quiz


});







// ------------START QUIZ----------------
function startQuest() {
 
  var myobj = document.getElementById("myBtn");
 myobj.remove();

   document.getElementById("question").innerHTML = "1" + questions[0];

  
      
    let parent = document.getElementById('preguntasAqui');
    let btn1= document.createElement('button')
    btn1.id = 'button-div'
    btn1.textContent = answers[0];
    parent.insertAdjacentElement('beforebegin', btn1)


    
    let parent2 = document.getElementById('preguntasAqui')
    let btn2= document.createElement('button')
    btn2.id = 'button-div2'
    btn2.textContent = answers[1];
    parent2.insertAdjacentElement('beforeend', btn2)

    
    var parent3 = document.getElementById('preguntasAqui')
    var btn3= document.createElement('button')
    btn3.id = 'button-div3'
    btn3.textContent = answers[2];
    parent3.insertAdjacentElement('beforeend', btn3)


        btn1.addEventListener("click", () => {
          alert(" CORRECT ");
          btn1.remove();
          btn2.remove();
           btn3.remove();
        score ++;
        secondQuest();
        
        });
        btn2.addEventListener("click", () => {
          alert("WRONG!");
          btn1.remove();
          btn2.remove();
          btn3.remove();
          countdown(countdown-8);
        secondQuest();
        
          });
          btn3.addEventListener("click", () => {
          alert("WRONG!");
          btn1.remove();
          btn2.remove();
          btn3.remove();
        secondQuest();
        countdown(countdown-8);
        });


}





function secondQuest() {
   
  var myobj = document.getElementById("myBtn");
  
     document.getElementById("question").innerHTML = "2" + questions[1];
  
            
     
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
 
  
//last


function thirdQuest() {
   
  var myobj = document.getElementById("myBtn");


   document.getElementById("question").innerHTML = "3" + questions[2];

  
   let parent = document.getElementById('preguntasAqui');
   let btn1= document.createElement('button')
   btn1.id = 'button-div'
   btn1.textContent = answers[6];
   parent.insertAdjacentElement('beforebegin', btn1)


  
   let parent2 = document.getElementById('preguntasAqui')
   let btn2= document.createElement('button')
   btn2.id = 'button-div2'
   btn2.textContent = answers[7];
   parent2.insertAdjacentElement('beforeend', btn2)

  
   let parent3 = document.getElementById('preguntasAqui')
   let btn3= document.createElement('button')
   btn3.id = 'button-div3'
   btn3.textContent = answers[8];
   parent3.insertAdjacentElement('beforeend', btn3)


   btn1.addEventListener("click", () => {
    alert(" CORRECT ");
    
    btn1.remove();
    btn2.remove();
    btn3.remove();
   score++
   end();
  
  });
  btn2.addEventListener("click", () => {
    alert("WRONG!");
    btn1.remove();
    btn2.remove();
    btn3.remove();
 
   end();
   
 });
 btn3.addEventListener("click", () => {
  alert("WRONG!");
 
  btn1.remove();
  btn2.remove();
  btn3.remove();
 
 end();
 
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

