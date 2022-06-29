// Button that starts quiz begins here.

document.getElementById("startbutton").addEventListener("click", function(){

    // Timer countdown start time is here
    var startTime = 60;

    var currentTime = setInterval(function() {
        if (startTime > 0){
            var currentTime = --startTime;
            document.getElementById("timerid").innerHTML = startTime;
        }
    
        else {
            document.getElementById("quizquestion1").style.display = "none";
            document.getElementById("quizquestion2").style.display = "none";
            document.getElementById("quizquestion3").style.display = "none";
            document.getElementById("highscorescreen").style.display = "none";
            document.getElementById("startscreen").style.display = "none";
            document.getElementById("losescreen").style.display = "flex";
            document.getElementById("timerid").innerHTML = "You ran out of time!";
        }
    
    }, 1000);

    document.getElementById("timerid").innerHTML = startTime;

    // Resets

    function resetFunction() {
        document.getElementById("quizquestion1").reset();
        document.getElementById("quizquestion2").reset();
        document.getElementById("quizquestion3").reset();
        document.getElementById("highscorescreen").reset();
        document.getElementById("losescreen").reset();
        document.getElementById("timerid").reset();
        document.getElementById("startscreen").reset();
      }

    // Quiz starts here

        document.getElementById("startscreen").style.display = "none";
        document.getElementById("quizquestion1").style.display = "flex";
        
    // Quiz Question 1
        document.getElementById("quizzbuttonc").addEventListener("click", function() {
            window.alert("Correct!");
            document.getElementById("quizquestion1").style.display = "none";
            document.getElementById("quizquestion2").style.display = "flex";
        })

        document.getElementById("quizzbuttona").addEventListener("click", function() {
            window.alert("Wrong! -10 Second Penalty Applied");
            startTime -= 10;
            document.getElementById("timerid").innerHTML = startTime;
            document.getElementById("quizquestion1").style.display = "none";
            document.getElementById("quizquestion2").style.display = "flex";
        })

        document.getElementById("quizzbuttonb").addEventListener("click", function() {
            window.alert("Wrong! -10 Second Penalty Applied");
            startTime -= 10;
            document.getElementById("timerid").innerHTML = startTime;
            document.getElementById("quizquestion1").style.display = "none";
            document.getElementById("quizquestion2").style.display = "flex";
        })

        document.getElementById("quizzbuttond").addEventListener("click", function() {
            window.alert("Wrong! -10 Second Penalty Applied");
            startTime -= 10;
            document.getElementById("timerid").innerHTML = startTime;
            document.getElementById("quizquestion1").style.display = "none";
            document.getElementById("quizquestion2").style.display = "flex";
        })
    
    // Quiz Question 2

        document.getElementById("quizzbutton2b").addEventListener("click", function() {
            window.alert("Correct!");
            document.getElementById("quizquestion2").style.display = "none";
            document.getElementById("quizquestion3").style.display = "flex";
        })

        document.getElementById("quizzbutton2a").addEventListener("click", function() {
            window.alert("Wrong! -10 Second Penalty Applied");
            startTime -= 10;
            document.getElementById("timerid").innerHTML = startTime;
            document.getElementById("quizquestion2").style.display = "none";
            document.getElementById("quizquestion3").style.display = "flex";
        })

        document.getElementById("quizzbutton2c").addEventListener("click", function() {
            window.alert("Wrong! -10 Second Penalty Applied");
            startTime -= 10;
            document.getElementById("timerid").innerHTML = startTime;
            document.getElementById("quizquestion2").style.display = "none";
            document.getElementById("quizquestion3").style.display = "flex";
        })

        document.getElementById("quizzbutton2d").addEventListener("click", function() {
            window.alert("Wrong! -10 Second Penalty Applied");
            startTime -= 10;
            document.getElementById("timerid").innerHTML = startTime;
            document.getElementById("quizquestion2").style.display = "none";
            document.getElementById("quizquestion3").style.display = "flex";
        })

            // Quiz Question 3

        document.getElementById("quizzbutton3d").addEventListener("click", function() {
            window.alert("Correct!");
            document.getElementById("quizquestion3").style.display = "none";
            document.getElementById("scorescreen").style.display = "flex";
            document.getElementById("yourscore").innerHTML = startTime;
            
            var input = document.getElementById("yourinitials");

            var saveYourScore = {
                score: startTime,
                initials: input.value,
            };

            clearInterval(currentTime);
        })

        document.getElementById("quizzbutton3a").addEventListener("click", function() {
            window.alert("Wrong! -10 Second Penalty Applied");
            document.getElementById("quizquestion3").style.display = "none";
            startTime -= 10;
            document.getElementById("timerid").innerHTML = startTime;
            document.getElementById("scorescreen").style.display = "flex";
            document.getElementById("yourscore").innerHTML = startTime;

            var input = document.getElementById("yourinitials");

            var saveYourScore = {
                score: startTime,
                initials: input.value,
            };

            clearInterval(currentTime);
        })

        document.getElementById("quizzbutton3b").addEventListener("click", function() {
            window.alert("Wrong! -10 Second Penalty Applied");
            document.getElementById("quizquestion3").style.display = "none";
            startTime -= 10;
            document.getElementById("timerid").innerHTML = startTime;
            document.getElementById("scorescreen").style.display = "flex";
            document.getElementById("yourscore").innerHTML = startTime;

            var input = document.getElementById("yourinitials");

            var saveYourScore = {
                score: startTime,
                initials: input.value,
            };

            clearInterval(currentTime);
        })

        document.getElementById("quizzbutton3c").addEventListener("click", function() {
            window.alert("Wrong! -10 Second Penalty Applied");
            document.getElementById("quizquestion3").style.display = "none";
            startTime -= 10;
            document.getElementById("timerid").innerHTML = startTime;
            document.getElementById("scorescreen").style.display = "flex";
            document.getElementById("yourscore").innerHTML = startTime;

            var input = document.getElementById("yourinitials");

            var saveYourScore = {
                score: startTime,
                initials: input.value,
            };

            clearInterval(currentTime);
        })
        
});

// High Scores Button Starts Here
document.getElementById("highscoresbutton").addEventListener("click", function(){

    document.getElementById("quizquestion1").style.display = "none";
    document.getElementById("quizquestion2").style.display = "none";
    document.getElementById("quizquestion3").style.display = "none";
    document.getElementById("losescreen").style.display = "none";
    document.getElementById("scorescreen").style.display = "none";
    document.getElementById("startscreen").style.display = "none";
    document.getElementById("highscorescreen").style.display = "flex";

});

            
// These were my attemps at getting the high scores local storage working. I'm adding these here just for reference.


            // TRY ONE WAS HERE

            // var initialsInput = document.querySelector("#yourinitials");
            // var initialsForm = document.querySelector("#initialsform");
            // var highScoresUl = document.querySelector("#highscoreul");
            // // var highScoresNum = document.querySelector("highscoresnum");

            // var scoresList = [];

            // for (var i = 0; i < scoresList.length; i++) {
            //     var highscores = scoresList[i];

            //     var li = document.createElement("li");
            //     li.textContent = highscores;
            //     li.setAttribute("data-index", i);

            //     highScoresUl.appendChild(li);

                
            // }



            // TRY TWO WAS HERE

            // function saveScore() {
            //     var saveHighScore = {
            //       initials: initials.value.trim(),
            //       score: startTime
            //     };

            //     localStorage.setItem("saveScore", JSON.stringify(saveScore));
            //   }

            //   function renderSavedScore() {
            //     var savedHighScore = JSON.parse(localStorage.getItem("saveScore"));

            //     if (savedHighScore !== null) {
            //         document.getElementById("highscore").innerHTML = savedHighScore.score;
            //         document.getElementById("highscoreinitials").innerHTML = savedHighScore.initials;

            //     } else {
            //         return;
            //     }
            //   }

            //   input.addEventListener("keypress", function(event) {
            //     if (event.key === "Enter") {
            //         event.preventDefault();
            //         localStorage.setItem("High Score", JSON.stringify(saveYourScore));
            //     }
            // });
