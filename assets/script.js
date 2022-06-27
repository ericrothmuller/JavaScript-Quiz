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



// Button that activates the timer begins here.

document.getElementById("startbutton").addEventListener("click", function(){

// Timer countdown is here

    var startTime = 11;

    var currentTime = setInterval(function() {
        if (startTime > 0){
            var currentTime = --startTime;
            document.getElementById("quizdiv").innerHTML = startTime;
        }

        else {
            document.getElementById("quizdiv").innerHTML = "You ran out of time!";
        }
    
    }, 1000);

    // Quiz starts here

    document.getElementById("quizdiv").innerHTML = "test";

});

