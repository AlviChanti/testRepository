
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};//DEFAULT OPERATOR USE!!! ||

updateScoreElement();
/*     if(!score){
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      };
    } */
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lost.';
    } else if (computerMove === 'scissors') {
      result = 'You won.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'rock') {
      result = 'You won.';
    } else if (computerMove === 'scissors') {
      result = 'You lost.';
    }

  } else if (playerMove === 'scissors') {
    if (computerMove === 'scissors') {
      result = 'Tie.';
    } else if (computerMove === 'rock') {
      result = 'You lost.';
    } else if (computerMove === 'paper') {
      result = 'You won.';
    }
  }

  if (result === 'You won.') {
    score.wins += 1;
  } else if (result === 'You lost.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves').innerHTML
    = `You
      <img src="images/${playerMove}-emoji.png" alt=""
      class="move-icon">
      <img src="images/${computerMove}-emoji.png" 
      alt=""
       
      class="move-icon" >   
      Computer`;

}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
    computerMove = 'scissors';
  }
  console.log(computerMove);
  return computerMove;
}
/*function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  alert('You reset the score.');
}*/
/*     const score = {
      wins: 0,
      losses: 0,
      ties: 0
    }; */
