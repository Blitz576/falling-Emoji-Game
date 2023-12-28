window.addEventListener("load", function () {

  let startButton = document.querySelector("button");
  let buttonParent = document.querySelector("#EmojisContainer");
  let easyModeButton = this.document.querySelector(".easy_mode");
  let hardModeButton = this.document.querySelector(".hard_mode");

  let gameSound = this.document.querySelector("#game_play");
  let click_sound = this.document.querySelector("#click_sound");

  let nameDiv = this.document.querySelector("#username");
  let scoreDiv = this.document.querySelector("#totalScore");
  const existingPlayersInfo = getInfoFromLocalStorage();
  const existingPlayerIndex = existingPlayersInfo.findIndex(player => player.name === localStorage.getItem("Player-Name"));
  nameDiv.innerHTML+=existingPlayersInfo[existingPlayerIndex].name;
  let parent = this.document.querySelector("#board");
  let my_image = createRandomImage();
  let gameSpeed = 499; //intial speed is easy one
  let grid = fillTheGrid(10, 10, parent);
  
  let column = settingNewPosition(grid, my_image);
  let row = 0;
  grid[row][column].removeImage();
  let score=existingPlayersInfo[existingPlayerIndex].score;  //intial game score
  scoreDiv.innerHTML=`Score: ${score}`; //score coming form data base
  let totalScore=0;

  //Easy mode
  easyModeButton.addEventListener("click", function () {
    hardModeButton.style.backgroundColor = "transparent";
    hardModeButton.style.color = "black";
    easyModeButton.style.backgroundColor = "green";
    easyModeButton.style.color = "white";
    //change the song source
    gameSound.src = "audio/Dancing Line - The Plains (Soundtrack).mp3";
  });

  //Hard mode
  hardModeButton.addEventListener("click", function () {
    easyModeButton.style.backgroundColor = "transparent";
    easyModeButton.style.color = "black";
    hardModeButton.style.backgroundColor = "red";
    hardModeButton.style.color = "white";
    
    gameSpeed++;
    gameSpeed =  (gameSpeed/2) +1;   

    //change the song source
    gameSound.src = "audio/Dancing Line - The Chaos (Soundtrack).mp3";
  });

  let time = 120;
  startButton.addEventListener("click", function () {
    click_sound.play();
    //after ending of the play
    click_sound.addEventListener("ended", function () {
      gameSound.play();

      buttonParent.removeChild(startButton);

      //adding timer
      var timerDiv = document.createElement("div");
      timerDiv.classList.add("timer");
      buttonParent.appendChild(timerDiv);

      //movement of the image
      document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
          console.log("right");
          // Check if moving to the right is allowed (within the grid)
          if (column < 9) {
            grid[row][column].removeImage();
            column++;
            grid[row][column].appendImage(my_image);
          }
        }
        // Keydown event to move the image to the left
        else if (event.key === "ArrowLeft") {
          // Check if moving to the left is allowed (within the grid)
          if (column > 0) {
            grid[row][column].removeImage();
            column--;
            grid[row][column].appendImage(my_image);
          }
        }


      let killProcess=0; //flag to the interval processes  
      let emojisBoard = document.getElementsByClassName("score");
      let emojisImages = document.getElementsByClassName("emoji_image");
       
      
      
     //falling the emoji 
     let gameProcessId = setInterval(function(){
        if (row < 10 && grid[lowerBoundry(row)][column].isEmpty()) {
            grid[row][column].removeImage(); //element is removed from that parent
  
            grid[++row][column].appendImage(my_image);
          } else if (row >= 10 || !grid[lowerBoundry(row)][column].isEmpty()) {
           let vecticImage = checkMatchingVertically(grid, row, column);
           let horizonImage = checkHorizontallyMatching(grid, row, column);
           

           if(vecticImage != -1) //matched 
           {
             let verticImageIndex = searchOnImage(vecticImage,emojisImages);
             emojisBoard[verticImageIndex].innerText = Number(emojisBoard[verticImageIndex].innerText) +1 +"";
             score+=1;
             totalScore+=1;
             scoreDiv.innerHTML=`Score : ${score}`;
             existingPlayersInfo[existingPlayerIndex].score=score;
             saveInfoToLocalStorage(existingPlayersInfo);
           }

           if(horizonImage != -1)
           {
            let horizonImageIndex = searchOnImage(horizonImage,emojisImages);
            console.log(horizonImageIndex);
            emojisBoard[horizonImageIndex].innerText = (Number(emojisBoard[horizonImageIndex].innerText) + 1) +"";
            score+=1;
            totalScore+=1;
            scoreDiv.innerHTML=`Score : ${score}`;
            existingPlayersInfo[existingPlayerIndex].score=score;
            saveInfoToLocalStorage(existingPlayersInfo);
          }
          if(totalScore==10){
            clearInterval(gameProcessId);
            clearInterval(timeProcessId);
            fireAlert("congratulation", "you won", "success");
          }
            row = 0;
            //changing the image and the column values
            my_image = createRandomImage();
            column = settingNewPosition(grid, my_image);
            grid[row][column].removeImage();
            grid[row][column].appendImage(my_image);
  
            if (!grid[1][column].isEmpty()) {
              killProcess=1;
            }
          }
          if(killProcess){  
            clearInterval(gameProcessId);
            console.log("process was killed sucessfully");
            if (!grid[1][column].isEmpty())   
            fireAlert("unfortunately", "you lost", "error");
  
          }
  
     },gameSpeed,killProcess);


      let timeProcessId = setInterval(function () {
        //killProcess=0;
        displayTime(time, timerDiv);

        //console.log("timer is on ");
        if (time > 0) {
          time -= 1;
        } else if (time <= 0) {
            killProcess=1;
        }

        //check the state of the process
        if(killProcess){  
          clearInterval(timeProcessId);
          console.log("process 2 was killed sucessfully");
          if(time<=0)  
          fireAlert("unfortunately", "time is out", "error");

        }
      }, 1000,killProcess);
    });

  });
});
