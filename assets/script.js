// Button that activates the timer begins here.

document.getElementById("startbutton").addEventListener("click", function(){

// Timer countdown is here

    var startTime = 11;

    var currentTime = setInterval(function() {
        if (startTime > 0){
            var currentTime = --startTime;
            document.getElementById("timerdiv").innerHTML = startTime;
        }

        else {
            document.getElementById("timerdiv").innerHTML = "You ran out of time!";
        }
    
    }, 1000);

    // Quiz starts here

    document.getElementById("quizdiv").innerHTML = "test";

});

