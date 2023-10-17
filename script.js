var result1 = 0;
var result2 = 0;

function startRound() {

    var randomNumber1 = Math.floor(Math.random() * 6 + 1);

    var imageSource = "images/" + "dice" + randomNumber1 + '.png';

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", imageSource);

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    var imageSource = "images/" + "dice" + randomNumber2 + '.png';

    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", imageSource);

    if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
        document.getElementById("result2").innerHTML = ++result2;
    }
    else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"
        document.getElementById("result1").innerHTML = ++result1;
    }
    else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!"
    }

}