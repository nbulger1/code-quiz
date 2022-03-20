# Code Quiz - Week 4 Homework

## Description

With a focus on web APIs, the task was to create an application that runs in browser using HTML, CSS, and Javascript files started from scratch. The user interface was meant to be clean and present the user with several quiz questions related to full-stack web development. 

This task was meant to familiarize us with some of the tests we may be presented with during the interview process in future career searches. 

## Table of Contents
- [Application](#Application)
- [HTML](#html)
- [CSS](#css)
- [Javascript](#javascript)
- [Tests](#tests)
- [Link](#link)

## Application 

The user story stated that the user is a coding bootcamp student who wants to take a timed quiz on Javascript fundamentals. The acceptance criteria included a start button that starts the timer and presents the first question. When the question was answered then the user was to be presented with another question. If the answer was incorrect then time was to be subtracted from the timer. After all the questions were answered or the timer reaches 0 then the quiz should be over. The user should be able to save their initials and scores to gauge progress as well as compare with peers. 

## HTML

The HTML was broken into the head and body. 

The head portion holds the link to the CSS file, some formatting, and the title of the page.

The body was broken into the header and main. The header contains text in top left that can be clicked to redirect to the leaderboard page without taking the quiz. The header also held the placeholder for the timer created in Javascript. 

Then main was divided into four different sections: welcome, question bank, final scores, and highscores. The welcome section presents the title of the Coding Quiz Challenge, a brief paragraph description, and the start button. The question bank contains placeholders for the quiz question and answers as well as a submit button and a next question button. The final score section contains the text input section for initials as well as a spot for the user to see their final percentage. Finally, the high scores page contains an unordered list to hold the initials and scores from previous attempts as well as a try again button and a clear leaderboard button. 

The javascript file was linked at the button of the HTML file, outside the main, within the body. 

## CSS

The CSS file was used to create a clean, polished look for the browser page as requested by the user. The header had a black background with white text and the remaining body background was left white with black text to keep the quiz look simple. 

## Javascript

The beginning of the javascript file contained all the global event handlers that contented the js file with different parts of the HTML. Following the event handlers was the array of different questions that could be populated into the HTML question bank. Once the global variables were defined and the questions were created I started to build the quiz. 

> **TIMER**

I gave the user 60 seconds to complete the 5 question quiz by setting the start of my timer to 60. I had the timer countdown 1 every second. Once time is up then the user will get an alert that says time is up and they will be directed to the final scores page without the opportunity to finish any more questions. Alternatively, once the questions were finished the timer was cleared out. 

> **WELCOME**

To present the welcome page, I hid the rest of the HTML sections by displaying none and kept the welcome section at display block. I added an event listener for the click of my Start Quiz button that hides the welcome section and presents the question bank. I also called my timer function on the click of the start button. 

> **QUESTION BANK**

To create each question, I declared a questionLoop function that I could pass an id variable through to replace the text of the question and answer options. I traversed through my question array to fill in each portion of my question bank in HTML and set the button backgrounds to default to white.

I added an event listener for a click on each of my answer option buttons. Once clicked the answer button background turned aqua and the state variable the set to the true or false value in the question array to determined if the clicked answer is correct or incorrect. 

Once the user chooses an option then they can click the submit button to see if their answer was correct or incorrect. I included a submit button so the user could click multiple options without being forced to submit one of them. Once the submit button is clicked then the results text will appear below the buttons to show whether the answer was right or wrong. If the answer was wrong then I subtracted 5 seconds from the timer. If the answer was correct then I added 1 to my score variable (previously set to 0 at the beginning).

The next question button could then be clicked to change out the question by looping through the questionLoop created above. If there were no more questions then the next question button will hide the question bank and present the final scores section. 

> **FINAL SCORES**

The final scores section presents the user with the final percentage score by dividing the score variable by 5 and multiplying it by 100. The user is also presented with an input box where they can enter their initials. 

The continue button, when clicked, then takes them to the leaderboard as well as pushes their initials and score onto two different arrays stored in local storage. 

> **LEADERBOARD**

The leaderboard is populated with the current initials and scores from local storage with the highest score at the top and the lowest score at the bottom. To order the scores from highest to lowest, I created a for loop that looked at my newScores array (populated from local storage) and pulled the highest score from the array to place it in an array called orderScore. Once I pulled that value, I populated which index in the original array that was in a new index array called orderIndex. The loop continued to sort through the newScores array to pull the next highest score, since the next one is not equal to the current high score, and push it onto the end of the orderScore array. I then used the current index of the high score to order the newInitials array into the same order as the scores so the initials did not get disconnected from their initials. These new ordered arrays were used to create the text content of the leaderboard list.   

The leaderboard has two buttons as well. One, Try Again, that will present the user with the beginning of the quiz again. The other that clears out the leaderboard by clearing the text content of the list as well as clearing local storage. 

## Tests
I went through each of my intended actions for the buttons to make sure they were behaving as expected:
- View Highscores redirects to leaderboard?
- Start Quiz presents first question and starts timer in top right?
- Clicking an option turns the button background aqua?
- Clicking submit present Correct or Incorrect below the buttons?
- If incorrect then 5 seconds are subtracted?
- Once all the questions are done a second click on Next Question takes the user to final score?
- Once initials are entered and continue is clicked then the leaderboard appears with all local storage items?
- If no initials are entered then an alert appears and prompts the user to enter their initials?
- Try Again starts the quiz over?
- Clear Leaderboard clears the text content of leaderboard and clears local storage?

![GIF demonstrating testing the code quiz for a variety of continues as well as assessing all button functionality](https://github.com/nbulger1/code-quiz/blob/main/assets/images/code_quiz_test_2.gif)

## Link

See following for a link to my deployed application: https://nbulger1.github.io/code-quiz/