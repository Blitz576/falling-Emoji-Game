window.addEventListener("load", function () {

  let startButton = this.document.querySelector(".start");
  let userName = this.document.querySelector("input");
  let speakerButton = this.document.querySelector(".sound_icon");
  let scoreBoardButton=this.document.querySelector(".score_board")
  let homePageSound=this.document.querySelector("audio");
  let clickSound= this.document.querySelector('#click_sound');
  
  if(localStorage.getItem('Player-Name')){
    userName.value=localStorage.getItem('Player-Name');
  }
  userName.addEventListener("input", function () {
    changeOpacity(userName, startButton);
  });

  changeOpacity(userName, startButton);

  speakerButton.addEventListener("click",function(){
    clickSound.play();   
    speakerButton.attributes.src.nodeValue=changeSoundButtonState(speakerButton.attributes.src.nodeValue,homePageSound); 
  
  });

  startButton.addEventListener("click", function () {
    clickSound.play();
    if (userName.value.trim()!=""){
      clickSound.addEventListener("ended",function(){
      window.localStorage.setItem("Player-Name",userName.value);
      window.location.href = "../GamePage.html";
    })
    }
  });
  

      
  scoreBoardButton.addEventListener("click",function(){
    clickSound.play();
    clickSound.addEventListener("ended",function(){
     
    console.log("sucess");
   })    
  })   


});