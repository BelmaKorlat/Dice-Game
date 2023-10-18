var result1 = 0;
var result2 = 0;

var player1 = "Player 1";
var player2 = "Player 2";

function editNames1() {
    player1 = prompt("Change Player1 name");

    document.querySelector("p.Player1").innerHTML = player1;
}

function editNames2() {
    player2 = prompt("Change player2 name");

    document.querySelector("p.Player2").innerHTML = player2;
}

function startRound() {

    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];

    image1.setAttribute("src", "images/diceGif.gif");
    image2.setAttribute("src", "images/diceGif.gif");
    image2.style.transform = "scaleX(-1)";
    image2.style.transform = "rotate(180deg)";

    setTimeout(() => {
        var randomNumber1 = Math.floor(Math.random() * 6 + 1);
        var randomNumber2 = Math.floor(Math.random() * 6 + 1);

        var imageSource = "images/" + "dice" + randomNumber1 + '.png';
        image1.setAttribute("src", imageSource);

        var imageSource = "images/" + "dice" + randomNumber2 + '.png';
        image2.setAttribute("src", imageSource);

        if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = player2 + " wins! 🚩"
            document.getElementById("result2").innerHTML = ++result2;
        }
        else if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "🚩" + player1 + " wins!"
            document.getElementById("result1").innerHTML = ++result1;
        }
        else if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!"
        }
    }, 2500);

}

function reset() {
    document.getElementById("result1").innerHTML = 0;

    document.getElementById("result2").innerHTML = 0;

    document.querySelector("p.Player1").innerHTML = '<span onclick="editNames1()">✎</span> Player 1';

    document.querySelector("p.Player2").innerHTML = '<span onclick="editNames2()">✎</span> Player 2';

    document.querySelector("h1").innerHTML = "Click a button";
}
