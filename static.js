function getComputerChoice() {
  const result = Math.random();
  if (result < 0.33) return "Rock";
  if (result < 0.66) return "Paper";
  return "Scissors";
}


class ScoreMenu {


  constructor() {
    this.humanScore = 0;
    this.computerScore = 0;
    this.roundNumber = 0;
  }


  updateScoreMenu() {
    document.getElementById('roundNum').textContent = this.roundNumber;
    document.getElementById('computerScore').textContent = this.computerScore;
    document.getElementById('humanScore').textContent = this.humanScore;
  }
}

function getResult(humanChoice, computerChoice) {
  // Lookup table: result from human's perspective
  const outcomes = {
    Rock:     { Rock: 'Tie',     Paper: 'Lose', Scissors: 'Win' },
    Paper:    { Rock: 'Win',     Paper: 'Tie',  Scissors: 'Lose' },
    Scissors: { Rock: 'Lose',    Paper: 'Win',  Scissors: 'Tie' }
  };

  const result = outcomes[humanChoice]?.[computerChoice] ?? 'Error';

  // Update scores and round number
  if (result === 'Win') score.humanScore++;
  if (result === 'Lose') score.computerScore++;
  score.roundNumber++;

  return result;
}


function getHumanChoice() {
  document.getElementById('choiceMenu').style.display = "block";
  let choice = document.getElementById('userChoice').value;
  return choice.toLowerCase().replace(/^\w/, c => c.toUpperCase());
}

class GameOrder {
  constructor() {
    this.roundLength = 5;
    this.currentRound = 0;
  }

  playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = getResult(humanChoice, computerChoice);
    score.updateScoreMenu();
    alert(`Round ${score.roundNumber}: You chose ${humanChoice}, computer chose ${computerChoice} → ${result}`);
  }
  gameloop() {
    this.playRound()
    this.currentRound++;
  }
}

const score = new ScoreMenu();
const game = new GameOrder();
const startBtn = document.getElementById('startGame');

startBtn.addEventListener('click', () => {
  document.getElementById('choiceMenu').style.display = "block";
  score.updateScoreMenu()
});

document.getElementById('submitChoice').addEventListener('click', () => {
  game.gameloop();
});
