let humanScore = 0;
let computerScore = 0;
let playerScoreDisplay = document.querySelector(".human-score");
let computerScoreDisplay = document.querySelector(".computer-score");

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener('click', function() {
    playRound('rock');
});

paperButton.addEventListener('click', function() {
    playRound('paper');
});

scissorsButton.addEventListener('click', function() {
    playRound('scissors');
});

/*function myfunction() {
    //let name = prompt("Enter the number of times: ", "6");
    //console.log("Hello" + name);
    //for(let i = 0; name > i; i ++)
    for(let i = 0;i<5;i++){
        start();
    } 
}*/

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = determineWinner(playerSelection, computerSelection);
    
    updateScore(result);
    
    let message = document.querySelector('#msg');
    message.textContent = result;
    
    if (humanScore === 5) {
        alert("You win the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Computer wins the game!");
        resetGame();
    }
}

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if ((player === 'rock' && computer === 'scissors') ||
               (player === 'paper' && computer === 'rock') ||
               (player === 'scissors' && computer === 'paper')) {
        return `You win! ${player} beats ${computer}.`;
    } else {
        return `Computer wins! ${computer} beats ${player}.`;
    }
}

function updateScore(result) {
    if (result.includes("You win")) {
        humanScore++;
    } else if (result.includes("Computer wins")) {
        computerScore++;
    }
    
    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
}

/*function myFunction() {
    for (let i = points.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let k = points[i];
      points[i] = points[j];
      points[j] = k;
    }
    document.getElementById("demo2").innerHTML = points;
  }*/