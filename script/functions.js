function changeOpacity(input, button) {
    if (input.value.trim())
        button.style.opacity = 1;
    else {
        button.style.opacity = 0.5;
    }
}

function countDownTimer(time, element) {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    element.innerHTML = `${minutes}:${seconds}`;
}


