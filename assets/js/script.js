//Event Handlers for any section of the HTML I may want to target in Javascript
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
var highscoresNavEl = document.querySelector(".highscores");
var highscoresEl = document.querySelector(".highscores-page");
var againEl = document.querySelector(".again");
var clearEl = document.querySelector(".clear");


//Array of questions
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
//Set the amount of time alloted for the quiz
var secondsLeft = 60;
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
        alert("Sorry! Time's up!");
        //Redirects to the final score page with the score based on the questions they finished with the unanswered questions as incorrect
        questionBankEl.setAttribute("style","display:none");
        finalScoreEl.setAttribute("style","display:block")
        finalPercentageEl.textContent = "Final score: " + (score/5)*100 + "%";
    }

    if(questionsView != "visible"){
        clearInterval(timerInterval);
        timerEl.textContent = "";
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

startQuizEl.addEventListener("click", function(event) {
    event.preventDefault();

    if(welcomeView === "visible"){
        welcomeEl.setAttribute("style", "display:none");
        welcomeView = "hidden";
        questionBankEl.setAttribute("style","display:block");
        questionsView = "visible";
    } else {
        welcomeEl.setAttribute("style", "display:block");
    }
    setTime();
});

//Create a state value to hold the option that was clicked
var state = null;
//Create a function that uses an id variable to replace the former question with the next question's text from the myQuestions array above
function questionLoop(id) {
    console.log("id: ", id)
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

    // Gather whether the value is correct or incorrect using the boolean value in the object
    answer1El.value = myQuestions[id].a[0].correct;
    answer2El.value = myQuestions[id].a[1].correct;
    answer3El.value = myQuestions[id].a[2].correct;
    answer4El.value = myQuestions[id].a[3].correct;
    
    return;
};

answer1El.addEventListener("click", function () {
    //Turn the background color of the selected button aqua and make the rest of them white - repeat for other buttons so only the one selected is aqua
    answer1El.style.backgroundColor = "#00ffff";
    answer2El.style.backgroundColor = "#ffffff";
    answer3El.style.backgroundColor = "#ffffff";
    answer4El.style.backgroundColor = "#ffffff";
    //fill in state variable with the true or false value applied above to be checked later
    state = answer1El.value;
});

answer2El.addEventListener("click", function () {
    state = answer2El.value;
    answer1El.style.backgroundColor = "#ffffff";
    answer2El.style.backgroundColor = "#00ffff";
    answer3El.style.backgroundColor = "#ffffff";
    answer4El.style.backgroundColor = "#ffffff";
});

answer3El.addEventListener("click", function () {
    state = answer3El.value;
    answer1El.style.backgroundColor = "#ffffff";
    answer2El.style.backgroundColor = "#ffffff";
    answer3El.style.backgroundColor = "#00ffff";
    answer4El.style.backgroundColor = "#ffffff";
});

answer4El.addEventListener("click", function () {
    state = answer4El.value;
    answer1El.style.backgroundColor = "#ffffff";
    answer2El.style.backgroundColor = "#ffffff";
    answer3El.style.backgroundColor = "#ffffff";
    answer4El.style.backgroundColor = "#00ffff";
});

//create a submit button so that the user can click on multiple different answers before deciding on one without it automatically counting them correct or incorrect

submitEl.addEventListener("click", function (event) {
    event.preventDefault();

    //if statement - if the clicked state value is true then congratulate the user and add one to their score otherwise tell them that was incorrect and subtract 5 seconds from the clock
    if(state == "true"){
        resultEl.textContent = "That's Correct! Nice Job"
        //add 1 to the score variable
        score = score + 1;
    } else {
        resultEl.textContent = "Sorry! That's incorrect"
        //Subtract 5 seconds from the timer
        secondsLeft -= 5;
    }
});

//generate the id variable to be passed through the questionLoop above
var id = 0;
//run the initial questionLoop to populate the first question using id = 0
questionLoop(id);
//create a next question button that when clicked continues to replace the question text with the next question until there are no more questions then hides the question bank and displays the finalscore section with the calculated percentage correct
nextEl.addEventListener("click", function (event)  {
    event.preventDefault();

    //If my id value is less than or equal to the question array length minus one then continue to call the question loop question function - otherwise hide and move on to final scores
    if (id < myQuestions.length - 1) {
        id = id + 1
        questionLoop(id);
    } else {
        questionBankEl.setAttribute("style","display:none");
        questionsView = "hidden";
        finalScoreEl.setAttribute("style","display:block")
        finalScoreView = "visible";
        finalPercentageEl.textContent = "Final score: " + (score/5)*100 + "%";
    }
});

//Create a continue button from the final scores page that hides the final scores, directs to the leaderboard, and takes the initials entered into the input textbox and stores them in local storage to add to the initials list in the leaderboard

var newInitials = [];
var newScore = [];

continueEl.addEventListener("click", function(event) {
    event.preventDefault();
    //Add in validation to make sure initials are entered in the text field before continuing
    if(initialsEl.value.length == 0){
        alert("Please enter initials!")
        return;
    } else {
        welcomeEl.setAttribute("style", "display:none");
        questionBankEl.setAttribute("style","display:none");
        questionsView = "hidden"
        finalScoreEl.setAttribute("style","display:none");
        finalScoreView = "hidden"
        highscoresEl.setAttribute("style","display:block");
        highscoresView = "visible"
        
        //Push the score in percentage form onto the newScore array after filling it in with the current scores in storage
        newScore = JSON.parse(localStorage.getItem("scores")) || [];
        
        newScore.push((score/5)*100);
        localStorage.setItem("scores", JSON.stringify(newScore));
        console.log(newScore);
    
        //Push the initials onto the newInitials array after filling it in with the current initials in storage
        newInitials = JSON.parse(localStorage.getItem("initials")) || [];
        newInitials.push(initialsEl.value.trim());
        localStorage.setItem("initials", JSON.stringify(newInitials));
        console.log(newInitials);

        //orderinitials and orderscore creation
        var orderInitials = [];
        var orderScore = [];
        var orderIndex = [];
        
        for(i=0; i<newScore.length; i++){
            var highScore = -1;
            var highIdx = 0;
            for(j=0; j<newScore.length; j++){
                if (!orderIndex.includes(j)){
                    if (newScore[j] > highScore){
                        highScore = newScore[j];
                        highIdx = j;
                    }
                }
            }

            orderInitials.push(newInitials[highIdx]);
            orderScore.push(newScore[highIdx]);
            orderIndex.push(highIdx);
        }

        for (i=0; i < orderInitials.length; i++) { 
            let li = document.createElement("li"); 
            li.textContent = orderInitials[i] + " " + orderScore[i] + "%"; 
            initialsListEl.appendChild(li); 
        }

    }

});

againEl.addEventListener("click", function(event) {
    event.preventDefault();
    //Redirect back to html file
    window.location.href = "./index.html";
});

//Hide all of the HTML sections aside from the highscore leaderboard when the highscores navigation element in the header is clicked
highscoresNavEl.addEventListener("click", function(event) {
    event.preventDefault(); 

    welcomeEl.setAttribute("style", "display:none");
    questionBankEl.setAttribute("style","display:none");
    questionsView = "hidden"
    finalScoreEl.setAttribute("style","display:none");
    finalScoreView = "hidden"
    highscoresEl.setAttribute("style","display:block");
    highscoresView = "visible"

    //Fill in the leaderboard if highscores in the top left is clicked
    newScore = JSON.parse(localStorage.getItem("scores")) || [];
    newInitials = JSON.parse(localStorage.getItem("initials")) || [];

    for (i=0; i < newInitials.length; i++) { 
        let li = document.createElement("li"); 
        li.textContent = newInitials[i] + " " + newScore[i] + "%"; 
        initialsListEl.appendChild(li); 
    }
});

//Clear out any text content of the leaderboard
clearEl.addEventListener("click", function(event) {
    event.preventDefault();
    initialsListEl.textContent = "";
    localStorage.clear();
});






