window.addEventListener("load",function(){

  let  startButton = this.document.querySelector(".start");
   userName = this.document.querySelector("input");
   

   userName.addEventListener("input",function(){
       if(userName.value.trim())
           startButton.style.opacity=1;
       else {
         startButton.style.opacity=0.5;
       } 

   })
   
   if(userName.value.trim())
           startButton.style.opacity=1;
       else {
         startButton.style.opacity=0.5;
       } 
      
  startButton.addEventListener("click",function(){
    if(userName.value.trim())
       window.location.href="../GamePage.html";
  })
})