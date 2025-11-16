function getComputerChoice() {
  const result = Math.random();

  if (result < 0.33) {
    return "Rock";
  } else if (result < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

class scoreCard {
  constructer(params) {
    this.humanScore = 0;
    this.computerScore = 0;
    this.roundNumber = 0;
  }

  /**
   * 
   */
  update() {
    
  } updateScoreMenu(){
  ge
  }
}


function getHumanChoice() {
  document.getElementById('choiceMenu').style.display = "block"
  choice=document.getElementById('userChoice').value;
  return choice.toLowerCase().replace(/^\w/, c => c.toUpperCase());
}



startBtn = document.getElementById('startGame');
startBtn.addEventListener('click', function startGame(){
  getComputerChoice();
  getHumanChoice();
  updateScoreMenu();

})

