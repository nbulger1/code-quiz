//Start variables
var welcome = document.querySelector(".welcome");
var startQuiz = document.querySelector(".start-quiz");

//Timer variables
var timerEl = document.querySelector(".timer");
var secondsLeft = 15;

//Question variables
var question1 = document.querySelector(".question-1");
var question2 = document.querySelector(".question-2");
var question3 = document.querySelector(".question-3");
var question4 = document.querySelector(".question-4");
var question5 = document.querySelector(".question-5");

//Answer variables
var answer1 = document.querySelectorAll(".answer-1");
var answer2 = document.querySelectorAll(".answer-2");
var answer3 = document.querySelectorAll(".answer-3");
var answer4 = document.querySelectorAll(".answer-4");

//function to make timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      //Subtract from the seconds variable
      secondsLeft--;
      //Create text portion of timer in upper right
      timerEl.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        //Add an alert to say time is up when countdown ends
      //   alert("Sorry! Time's up!");
      }
  
    }, 1000);
};

//Display set variables
var welcomeDisplay = "block";
var question1Display = "none";
var question2Display = "none";
var question3Display = "none";
var question4Display = "none";
var question5Display = "none";

//array to keep track of score
var scoreTracker = [];

//Add event listener to start quiz when "start-quiz" button is pressed
startQuiz.addEventListener("click", function() {
    if(welcomeDisplay == "block") {
        welcome.setAttribute("style", "display:none");
        question1.setAttribute("style", "display:block");
        question1Display = "block";
    }
});

setTime();

//revisit this after everything else is done
// function nextQuestion(x,y) {
//     questionx.addEventListener("click", function() {
//         if(questionxDisplay == "block") {
//             questionx.setAttribute("style", "display:none");
//             questiony.setAttribute("style", "display:block");
//             questionxDisplay = "none";
//             questionyDisplay = "block";
//         }
//     });
// }
// nextQuestion(x,y);

//Add event listener to move to next question when "answer" button is pressed
question1.addEventListener("click", function() {
    if(question1Display == "block") {
        question1.setAttribute("style", "display:none");
        question2.setAttribute("style", "display:block");
        question1Display = "none";
        question2Display = "block";
    }
});

//Add event listener to move to next question when "answer" button is pressed
question2.addEventListener("click", function() {
    if(question2Display == "block") {
        question2.setAttribute("style", "display:none");
        question3.setAttribute("style", "display:block");
        question2Display = "none";
        question3Display = "block";
    }
});

//Add event listener to move to next question when "answer" button is pressed
question3.addEventListener("click", function() {
    if(question3Display == "block") {
        question3.setAttribute("style", "display:none");
        question4.setAttribute("style", "display:block");
        question3Display = "none";
        question4Display = "block";
    }
});

//Add event listener to move to next question when "answer" button is pressed
question4.addEventListener("click", function() {
    if(question4Display == "block") {
        question4.setAttribute("style", "display:none");
        question5.setAttribute("style", "display:block");
        question4Display = "none";
        question5Display = "block";
    }
});

//Add event listener to move to next question when "answer" button is pressed
question5.addEventListener("click", function() {
    if(question5Display == "block") {
        question5.setAttribute("style", "display:none");
        question5Display = "none";
    }
});






