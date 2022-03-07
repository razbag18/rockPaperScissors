const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.getElementsByClassName("button");
let userChoice;
let computerChoice;

class Item {
  // Create new instances of the same class as static attributes
  static Paper = new Item("paper");
  static Scissors = new Item("scissors");
  static Rock = new Item("rock");

  constructor(name) {
    this.name = name;
  }
}

let paper = Item.Paper.name;
let scissors = Item.Scissors.name;
let rock = Item.Rock.name;

Array.prototype.forEach.call(possibleChoices, function (possibleChoice) {
  possibleChoice.addEventListener("click", (e) => {
    generateUserChoice(e);
    generateComputerChoice();
    getResult();
  });
});

function generateUserChoice(e) {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
}

function generateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

  computerChoice = possibleChoices[randomNumber].id;
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (isDraw()) {
    resultDisplay.innerHTML = "Draw";
  } else if (isComputerWins()) {
    resultDisplay.innerHTML =
      `Computer Wins! ${computerChoice} beats ${userChoice}.`.toProperCase();
  } else
    resultDisplay.innerHTML =
      `User Wins! ${userChoice} beats ${computerChoice}.`.toProperCase();

  function isDraw() {
    return userChoice == computerChoice;
  }

  function isComputerWins() {
    return (
      (computerChoice == scissors && userChoice == paper) ||
      (computerChoice == paper && userChoice == rock) ||
      (computerChoice == rock && userChoice == scissors)
    );
  }
}

String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
