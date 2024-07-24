var randomNumber1 = Math.floor((Math.random()*6));
document.querySelectorAll(".img1")[randomNumber1].classList.toggle("invisible");

var randomNumber2 = Math.floor((Math.random()*6));
document.querySelectorAll(".img2")[randomNumber2].classList.toggle("invisible");



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🚩Player 1 Wins!"
    } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins!🚩"
    } else {
    document.querySelector("h1").innerText = "Draw!"
    }
