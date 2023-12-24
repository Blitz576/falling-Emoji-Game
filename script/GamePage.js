window.addEventListener("load", function () {
    let startButton = document.querySelector("button");
    let buttonParent = document.querySelector("#container");

    let nameDiv = this.document.querySelector("#username");
    nameDiv.innerHTML+=localStorage.getItem("Player-Name");

    let time = 120;
    startButton.addEventListener("click", function () {
        buttonParent.removeChild(startButton);
        var timerDiv = document.createElement("div");
        buttonParent.appendChild(timerDiv);
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