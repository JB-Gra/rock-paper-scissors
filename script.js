

/* 
function computerPlay() {
  const playChoices = ["rock", "paper", "scissors"];
  return playChoices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie.";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You won! Rock smash scissors!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose. Paper wraps rock.";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You won! Paper wraps rock!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose. Scissors cuts paper.";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You won! Scissors cuts paper!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose. Rock smash scissors.";
  } else {
    return "Please, enter a valid option.";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let userInput = prompt("Which would you choose? Rock, paper or scissors?");
    const playerSelection = userInput;
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}
 */