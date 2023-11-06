"use strict";
//logjika te score
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// Krimimi i nje fuksioni per mos shkohet senet e njejta  
const displayMessage = function(message) {
  document.querySelector(".message").textContent = message;
};

// funksioni i check logjika mbas butonit
document.querySelector(".check").addEventListener("click", function() {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // Nese nuk ka asnje vler 
  if (!guess) {
    displayMessage("No number 😢");
    // Kur lojtari qellon numrin sekret 
  } else if (guess === secretNumber) {
    // displayMessage eshte nje funksjon qe e kemi kriu ne rreshtin e 7 per te mos mbishkruhen senen e njejta 
    displayMessage("Correct Number!🥇");
    //Nese lojtari eshte sakt del numri sekret edhe ngrrihet ngjyra e faqes 
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "20rem";
    document.querySelector(".number").textContent = secretNumber;
    //Ruajte e highscore 
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //Logjika kur lojtari shenon nje numer me te madh edhe me te vogel
  } else if (guess !== secretNumber) {
    if (score > 1) {
      
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }


  }
});
// Logjika mbas butonit again
document.querySelector(".again").addEventListener("click", function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "20rem";
});
