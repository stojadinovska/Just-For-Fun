let rollButton = document.getElementById("roll-button");
let holdButton = document.getElementById("hold-button");
let newGameButt = document.getElementById("newGameButt")
let playerOneTotal = document.getElementById("playerOneTotal");
let playerOneCurent = document.getElementById("playerOneCurent");
let playerTwoTotal = document.getElementById("playerTwoTotal");
let playerTwoCurent = document.getElementById("playerTwoCurent");
let winText = document.getElementById("win");
let playerOneContainer = document.getElementById("playerOneContainer")
let playerTwoContainer = document.getElementById("playerTwoContainer")

let num;
let sum = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let player1 = true;
let curent = playerOneCurent;
let total;

rollButton.addEventListener("click", gamePlay);
holdButton.addEventListener("click", hold);
newGameButt.addEventListener("click", newGame)

// function switchPlayer(pl)
// {
//   curent  = pl? playerOneCurent : playerTwoCurent;
// }

function changeBackground () {
  if(player1){
    playerOneContainer.style.backgroundColor = "rgba(182, 182, 182, 0.8)";
    playerOneContainer.style.opacity = "100%"
    playerTwoContainer.style.backgroundColor = "rgb(235, 232, 232, 0.3)";
    playerTwoContainer.style.opacity = "80%"
  }
  else {
    playerTwoContainer.style.backgroundColor = "rgba(182, 182, 182, 0.8)";
    playerTwoContainer.style.opacity = "100%"
    playerOneContainer.style.backgroundColor = "rgb(235, 232, 232, 0.3)";
    playerOneContainer.style.opacity = "80%"
  }
}

function hold () {
  if (player1){
    totalScore1 = totalScore1 + sum;
    playerOneTotal.innerText = totalScore1.toString()
    playerOneCurent.innerText = "0"
    youWin(totalScore1, "1")
    player1 = false
  }
  else {
    totalScore2 = totalScore2 + sum;
    playerTwoTotal.innerText = totalScore2.toString()
    playerTwoCurent.innerText = "0"
    youWin(totalScore2, "2")
    player1 = true
  }
  sum = 0;
  changeBackground ()
}

function newGame () {
  rollButton.disabled = false;
  holdButton.disabled = false;
  sum = 0;
  totalScore1 = 0;
  totalScore2 = 0;
  player1 = true;
  changeBackground ()
  playerOneTotal.innerText = "0"
  playerTwoTotal.innerText = "0"
  playerTwoCurent.innerText = "0"
  playerOneCurent.innerText = "0"
  winText.innerText = " "
}

function youWin (score, player){
  if(score >= 100) {
    winText.innerText = `Player ${player} Won`
    rollButton.disabled = true;
    holdButton.disabled = true;
  }
}

function gamePlay() {
  rollDice()
  if(num == 1 ){
    player1 = !player1;
    sum = 0;
  }
  else sum = sum + parseInt(num)
  
  if (player1){
    playerOneCurent.innerText = sum;
    playerTwoCurent.innerText = "0"
  }
  else {
    playerTwoCurent.innerText = sum;
    playerOneCurent.innerText = "0"
  }
  changeBackground ()
}

function rollDice() {
  const dice = document.querySelectorAll(".die-list");
  dice.forEach(die => {
    toggleClasses(die);
    die.dataset.roll = getRandomNumber(1, 6);
    num = die.dataset.roll;
  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}
  
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}