"use strict";

/*
just learning js


console.log(document.querySelector(".message").textContent);


document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 55;
console.log(document.querySelector(".guess").value);


*/

let secrtNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".number").textContent = secrtNumber;

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);

    console.log(guess, typeof guess);

    //when there is no input
    if (!guess) {
        document.querySelector(".message").textContent = "⚠️ No Number!";

        //when payer wins
    } else if (guess === secrtNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number! ";
        document.querySelector("body").style.backgroundColor = "#60b347";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = score;
        }

        //this is when guess is too high
    } else if (guess > secrtNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "🔆 Too high!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "💥 You lost!";
            document.querySelector(".score").textContent = 0;
        }

        //thsi is when guess is too low
    } else if (guess < secrtNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "🐡 Too Low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "💥 You lost!";

            document.querySelector(".score").textContent = 0;
        }
    }
});

//btn Again!

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secrtNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";

    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
});