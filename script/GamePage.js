window.addEventListener("load", function () {
    let startButton = document.querySelector("button");
    let parent = document.querySelector("#container");

    let time = 120;
    startButton.addEventListener("click", function () {

        parent.removeChild(startButton);
        var timerDiv = document.createElement("div");
        parent.appendChild(timerDiv);
        timerDiv.classList.add("timer")

        let id=setInterval(function () {
            countDownTimer(time,timerDiv);
            if(time>0){
                time-=1;
            }else{
                clearInterval(id);
            }
            
           
            // countDownTimer(120,timer);
        }, 1000)
    })
})