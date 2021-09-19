var timerEl = document.getElementById('time');
var mainEl = document.getElementById('main');

var message =
  'GAME OVER';
var words = message;

// Timer that counts down from 5
function countdown() {
  var timeLeft = 14;

  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining,';
          timeLeft--;
           displayMessage();
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
     // un ratp displayMessage();
    }
  }, 1000);
}



// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
     
    clearInterval(msgInterval);
        mainEl.textContent = words;
    

  }, 1000);
}

countdown();
