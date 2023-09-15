function timer(){
    var sec = 75;
    var timer = setInterval(function(){
        document.getElementById("time").innerHTML='00:'+ sec;
        sec--;
        if (sec < 0) {
            clearInterval(time);
        }
    }, 1000);
}