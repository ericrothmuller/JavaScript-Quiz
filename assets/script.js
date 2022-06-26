// Timer

var startTime = 10;

var currentTime = setInterval(function() {
    if (startTime > 0){
        var currentTime = --startTime;
        document.getElementById("timer").innerHTML = startTime;
    }
    else {document.getElementById("timer").innerHTML = "BOOM";
    }
    
}, 1000);