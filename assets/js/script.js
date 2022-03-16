//Event Handlers
var welcomeEl = document.querySelector(".welcome");
var startQuizEl = document.querySelector(".start-quiz");
var timerEl = document.querySelector(".timer");
var questionBankEl = document.querySelector(".question-bank");
var questionEl = document.querySelector("#question");
var answerContainer = document.querySelector(".answer-list");
var answerEl = document.querySelectorAll(".answer");
var answer1El = document.querySelector("#answer-1");
var answer2El = document.querySelector("#answer-2");
var answer3El = document.querySelector("#answer-3");
var answer4El = document.querySelector("#answer-4");
var resultEl = document.querySelector(".result");
var submitEl = document.querySelector(".submit");
var nextEl = document.querySelector(".next");
var finalScoreEl = document.querySelector(".final-score");
var finalPercentageEl = document.querySelector(".final-percentage");
var initialsEl = document.querySelector("#initials");
var initialsListEl = document.querySelector(".initials-list");
var continueEl = document.querySelector(".continue");
var highscoresEl = document.querySelector(".highscores-page");
var againEl = document.querySelector(".again");
var clearEl = document.querySelector(".clear");


//Object of questions
var myQuestions = [
    {   id: 0,
        q: "What is a CSS selector?",
        a : [{text: "A string variable", correct: false},
            {text: "The part of the CSS that directs to the element in HTML", correct: false},
            {text: "The first part of CSS code", correct: false},
            {text: "Both 2 and 3", correct: true}
        ]
    },

    {   id: 1,
        q: "Inside which HTML element do we put the Javascript?",
        a : [{text: "<js>", correct: false},
            {text: "<javascript>", correct: false},
            {text: "<script>", correct: true},
            {text: "<scripting>", correct: false}
        ]
    },

    {   id: 2,
        q: "Where is the correct place to insert a Javascript?",
        a : [{text: "Both the <head> section and the <body> section are correct", correct: false},
            {text: "The <body> section", correct: true},
            {text: "The <head> section", correct: false},
            {text: "At the very top of the page", correct: false}
        ]
    },

    {   id: 3,
        q: "How do you write 'Hello World' in an alert box?",
        a : [{text: "alertBox('Hello World')", correct: false},
            {text: "alert('Hello World')", correct: true},
            {text: "prompt('Hello World')", correct: false},
            {text: "confirm('Hello World')", correct: false}
        ]
    },

    {   id: 4,
        q: "How do you create a function in Javascript?",
        a : [{text: "function myFunction()", correct: true},
            {text: "function:myFunction()", correct: false},
            {text: "function = myFunction()", correct: false},
            {text: "var function = myFunction()", correct: false}
        ]
    },
];


//Set score to 0
var score = 0;


function buildQuiz() {
    var secondsLeft = 120;
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
    //Set initial attributes to hide everything but welcome
    welcomeEl.setAttribute("style", "display:block, text-align: center");
    questionBankEl.setAttribute("style","display:none");
    finalScoreEl.setAttribute("style","display:none");
    highscoresEl.setAttribute("style","display:none");

    var welcomeView = "visible";
    var questionsView = "hidden";
    var finalScoreView = "hidden";
    var highscoresView = "hidden";

    startQuizEl.addEventListener("click", function() {
        if(welcomeView === "visible"){
            welcomeEl.setAttribute("style", "display:none");
            welcomeView = "hidden";
            questionBankEl.setAttribute("style","display:block");
            questionsView = "visible";
        } else {
            welcomeEl.setAttribute("style", "display:block");
        }
        //start timer here?
    });

    //set start variable
    var start = true;

    function questionLoop(id) {

        //Set default button backgrounds and make result text empty
        answer1El.style.backgroundColor = "#ffffff";
        answer2El.style.backgroundColor = "#ffffff";
        answer3El.style.backgroundColor = "#ffffff";
        answer4El.style.backgroundColor = "#ffffff";
        resultEl.textContent = "";

        //Fill in question and answers with first index in myQuestions object
        questionEl.textContent = myQuestions[id].q;
        answer1El.textContent = myQuestions[id].a[0].text;
        answer2El.textContent = myQuestions[id].a[1].text;
        answer3El.textContent = myQuestions[id].a[2].text;
        answer4El.textContent = myQuestions[id].a[3].text;

        //Gather whether the value is correct or incorrect using the boolean value in the object
        answer1El.value = myQuestions[id].a[0].correct;
        answer2El.value = myQuestions[id].a[1].correct;
        answer3El.value = myQuestions[id].a[2].correct;
        answer4El.value = myQuestions[id].a[3].correct;

        //Create a state value to hold the option that was clicked
        var state = ""
        answer1El.addEventListener("click", function () {
            //Turn the background color of the selected button aqua and make the rest of them white - repeat for other buttons so only the one selected is aqua
            answer1El.style.backgroundColor = "#00ffff";
            answer2El.style.backgroundColor = "#ffffff";
            answer3El.style.backgroundColor = "#ffffff";
            answer4El.style.backgroundColor = "#ffffff";
            //fill in state variable with the true or false boolean value applied above to be checked later
            state = answer1El.value;
        });
        answer2El.addEventListener("click", function () {
            state = answer2El.value
            answer1El.style.backgroundColor = "#ffffff";
            answer2El.style.backgroundColor = "#00ffff";
            answer3El.style.backgroundColor = "#ffffff";
            answer4El.style.backgroundColor = "#ffffff";
        });
        answer3El.addEventListener("click", function () {
            state = answer3El.value
            answer1El.style.backgroundColor = "#ffffff";
            answer2El.style.backgroundColor = "#ffffff";
            answer3El.style.backgroundColor = "#00ffff";
            answer4El.style.backgroundColor = "#ffffff";
        });
        answer4El.addEventListener("click", function () {
            state = answer4El.value
            answer1El.style.backgroundColor = "#ffffff";
            answer2El.style.backgroundColor = "#ffffff";
            answer3El.style.backgroundColor = "#ffffff";
            answer4El.style.backgroundColor = "#00ffff";
        });
        
        submitEl.addEventListener("click", function () {

            if(state == "true"){
                resultEl.textContent = "That's Correct! Nice Job"
                score = score + 1;
            } else {
                resultEl.textContent = "Sorry! That's incorrect"
                //subtract time from the clock?
            }
        });
    };

    if(start) {
        questionLoop(0);
    }

    var id = 0;
    nextEl.addEventListener("click", function ()  {
        start = false
        if (id < myQuestions.length) {
            id++
            questionLoop(id);
        } else {
            questionBankEl.setAttribute("style","display:none");
            finalScoreEl.setAttribute("style","display:block")
        }
    });

    finalPercentageEl.textContent = "Final score: " + (score/5)*100 + "%";

    continueEl.addEventListener("click", function() {
        finalScoreEl.setAttribute("style","display:none");
        highscoresEl.setAttribute("style", "display:block");
        var newInitials = initialsEl.value.trim();
        localStorage.setItem("initials", newInitials);
        initialsListEl.textContent = localStorage.getItem("initials") + "  " + (score/5)*100 + "%";
    });
}

buildQuiz(); 

againEl.addEventListener("click", function() {
    buildQuiz();
});

clearEl.addEventListener("click", function() {
    initialsListEl.textContent = "";
});






