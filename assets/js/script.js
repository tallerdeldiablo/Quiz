var timerEl = document.getElementById('time');
var messageEl = document.getElementById('game-over');
var startEl = document.querySelector("#myBtn");
var olEl = document.querySelector("#ol-list");
var objeto = {answer:"a1", child1:"500", a2:"white", a3:"white"};

var message =
  'GAME OVER';
var words = message;

// Timer that counts down from 5
function countdown() {
  var timeLeft = 21;

  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining,';
          timeLeft--;
          
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
     // timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      timerEl.textContent = timeLeft + ' Time over';
      // Call the `displayMessage()` function
       displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
     
    clearInterval(msgInterval);
        messageEl.textContent = words;
    

  }, 1000);
}
// ------------START QUIZ----------------
function startQuest() {
    var myobj = document.getElementById("myBtn");
    myobj.remove();

    document.getElementById("content-question").innerHTML = "PRIMERA RONDA " + objeto.type;
      
        
     
  


}



startEl.addEventListener("click", function() {  
 
    startQuest();
 countdown();//llama timer / Start Quiz


});

