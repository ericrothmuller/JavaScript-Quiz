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
            document.getElementById("losescreen").style.display = "flex";
            document.getElementById("timerid").innerHTML = "You ran out of time!";
        }
    
    }, 1000);

    document.getElementById("timerid").innerHTML = startTime;

    // Quiz starts here

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
            window.alert("You scored " + startTime + "!");
            clearInterval(currentTime);
        })

        document.getElementById("quizzbutton3a").addEventListener("click", function() {
            window.alert("Wrong! -10 Second Penalty Applied");
            document.getElementById("quizquestion3").style.display = "none";
            startTime -= 10;
            document.getElementById("timerid").innerHTML = startTime;
            window.alert("You scored " + startTime + "!");
            clearInterval(currentTime);
        })

        document.getElementById("quizzbutton3b").addEventListener("click", function() {
            window.alert("Wrong! -10 Second Penalty Applied");
            document.getElementById("quizquestion3").style.display = "none";
            startTime -= 10;
            document.getElementById("timerid").innerHTML = startTime;
            window.alert("You scored " + startTime + "!");
            clearInterval(currentTime);
        })

        document.getElementById("quizzbutton3c").addEventListener("click", function() {
            window.alert("Wrong! -10 Second Penalty Applied");
            document.getElementById("quizquestion3").style.display = "none";
            startTime -= 10;
            document.getElementById("timerid").innerHTML = startTime;
            window.alert("You scored " + startTime + "!");
            clearInterval(currentTime);
        })
        
});

// High Scores Button Starts Here
document.getElementById("highscoresbutton").addEventListener("click", function(){

    document.getElementById("quizquestion1").style.display = "none";
    document.getElementById("quizquestion2").style.display = "none";
    document.getElementById("quizquestion3").style.display = "none";
    document.getElementById("losescreen").style.display = "none";
    document.getElementById("highscorescreen").style.display = "flex";

});