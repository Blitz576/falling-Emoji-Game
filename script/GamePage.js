window.addEventListener("load", function () {
    let startButton = document.querySelector("button");
    let buttonParent = document.querySelector("#container");
    let gameSound =  this.document.querySelector("#game_play")
    let clickSound= this.document.querySelector('#click_sound');
    let nameDiv = this.document.querySelector("#username");
    nameDiv.innerHTML+=localStorage.getItem("Player-Name");
    
    


    let time = 120;
    startButton.addEventListener("click", function () {
        clickSound.play();
        
        clickSound.addEventListener("ended",function(){     
        gameSound.play();      
        buttonParent.removeChild(startButton);
        var timerDiv = document.createElement("div");
        timerDiv.classList.add("timer")
        buttonParent.appendChild(timerDiv);

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
})