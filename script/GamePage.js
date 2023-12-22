window.addEventListener("load", function () {
    let startButton = document.querySelector("button");
    let parent = document.querySelector("#container");

    startButton.addEventListener("click", function () {
        parent.removeChild(startButton);
    })
})