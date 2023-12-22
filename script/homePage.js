window.addEventListener("load", function () {

  let startButton = this.document.querySelector(".start");
  let userName = this.document.querySelector("input");


  userName.addEventListener("input", function () {
    changeOpacity(userName, startButton);
  });

  changeOpacity(userName, startButton);

  startButton.addEventListener("click", function () {
    if (userName.value.trim())
      window.location.href = "../GamePage.html";
  });
});