// RANDOM NUMBER GENERATORS
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// RANDOM DIRECTORY SETUP
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";

// IMAGE CLASS SELECTOR SETUP
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

// TITLE SELECTOR SETUP
var titleText = document.querySelector("h1");


// CHANGE THE IMAGE
image1.setAttribute("src", randomImage1);
image2.setAttribute("src", randomImage2);


// PLAYER 1 WINS
if (randomNumber1 > randomNumber2) {
  titleText.textContent = "💜 Player 1 Wins!" }

// PLAYER 2 WINS
else if (randomNumber1 < randomNumber2) {
  titleText.textContent = "Player 2 Wins! 💜"; }
// DRAW
else {
  titleText.textContent = "💜 Draw! 💜"; }
