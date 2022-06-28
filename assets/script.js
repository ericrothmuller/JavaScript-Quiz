// Global Variables

// Timer countdown start time is here
var startTime = 10;



// Game Questions

var questions = [
    {
        question: "What is an array?",
        a: "A sequence of one or more characters that may consist of letters, numbers, or symbols.",
        b: "A technique used to style certain text within the DOM.",
        c: "A special variable which can hold more than one value. It is like a list.",
        d: "A special way to call to the localhost in order to save data.",
        answer: "C"
    },
    {
        question: "What is global variables?",
        a: "A declared variable that is limited to the scope of a block statement.",
        b: "A variable that has no scope and is available throughout the entire length of code.",
        c: "A variable that is block-scoped and can't be changed through reassignment.",
        d: "It's when you have a function within another function.",
        answer: "B"
    },
    {
        question: "What is the use of isNaN function?",
        a: "It is used to determine what operating system a user is using.",
        b: "It always returns no value or no object.",
        c: "Produces a negative infinity number by dividing a negative number by zero.",
        d: "It returns true if the argument is not a number, otherwise it is false.",
        answer: "D"
    }


]

// Button that starts quiz begins here.

document.getElementById("startbutton").addEventListener("click", function(){
    // Timer starts here
    document.getElementById("timerid").innerHTML = startTime;

    var currentTime = setInterval(function() {
        if (startTime > 0){
            var currentTime = --startTime;
            document.getElementById("timerid").innerHTML = startTime;
        }
    
        else {
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
            window.alert("Wrong!");
            document.getElementById("quizquestion1").style.display = "none";
            document.getElementById("quizquestion2").style.display = "flex";
        })

        document.getElementById("quizzbuttonb").addEventListener("click", function() {
            window.alert("Wrong!");
            document.getElementById("quizquestion1").style.display = "none";
            document.getElementById("quizquestion2").style.display = "flex";
        })

        document.getElementById("quizzbuttond").addEventListener("click", function() {
            window.alert("Wrong!");
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
            window.alert("Wrong!");
            document.getElementById("quizquestion2").style.display = "none";
            document.getElementById("quizquestion3").style.display = "flex";
        })

        document.getElementById("quizzbutton2c").addEventListener("click", function() {
            window.alert("Wrong!");
            document.getElementById("quizquestion2").style.display = "none";
            document.getElementById("quizquestion3").style.display = "flex";
        })

        document.getElementById("quizzbutton2d").addEventListener("click", function() {
            window.alert("Wrong!");
            document.getElementById("quizquestion2").style.display = "none";
            document.getElementById("quizquestion3").style.display = "flex";
        })

            // Quiz Question 3

        document.getElementById("quizzbutton3d").addEventListener("click", function() {
            window.alert("Correct!");
            document.getElementById("quizquestion3").style.display = "none";
        })

        document.getElementById("quizzbutton3a").addEventListener("click", function() {
            window.alert("Wrong!");
            document.getElementById("quizquestion3").style.display = "none";
        })

        document.getElementById("quizzbutton3b").addEventListener("click", function() {
            window.alert("Wrong!");
            document.getElementById("quizquestion3").style.display = "none";
        })

        document.getElementById("quizzbutton3c").addEventListener("click", function() {
            window.alert("Wrong!");
            document.getElementById("quizquestion3").style.display = "none";
        })
        

});