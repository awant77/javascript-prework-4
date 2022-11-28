function playGame(playerInput) {
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "nożyce";
    } else if (argMoveId == 3) {
      return "papier";
    } else {
      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

    if (
      (argComputerMove == "kamień" && argPlayerMove == "papier") ||
      (argComputerMove == "papier" && argPlayerMove == "nożyce") ||
      (argComputerMove == "nożyce" && argPlayerMove == "kamień")
    ) {
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == argPlayerMove) {
      printMessage("Remis");
    } else {
      printMessage("Tym razem przegrywasz :(");
    }
  }

  clearMessages();

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  let computerMove = getMoveName(randomNumber);

  let playerMove = getMoveName(playerInput);

  printMessage("Twój ruch to: " + playerMove);

  printMessage("Mój ruch to: " + computerMove);

  displayResult(computerMove, playerMove);
}

document.getElementById("play-rock").addEventListener("click", function () {
  playGame("1");
});
document.getElementById("play-scissors").addEventListener("click", function () {
  playGame("2");
});
document.getElementById("play-paper").addEventListener("click", function () {
  playGame("3");
});
