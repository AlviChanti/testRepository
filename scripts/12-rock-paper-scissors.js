
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
    let isAutoPlaying = false;
    let intervalId;
    function autoPlay() 
    {
      if(!isAutoPlaying)
      {
      intervalId =  setInterval(function () {
          const playerMove = pickComputerMove();
          playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;

      } else 
      {
        clearInterval(intervalId);
        isAutoPlaying = false;
      }
    }

    document.querySelector('.js-rock-button').addEventListener
    ('click', () => {playGame('rock')});
    document.querySelector('.js-paper-button').addEventListener('click', () => {playGame('paper')});
    document.querySelector('.js-scissors-button').addEventListener('click', () => {'scissors'});

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    playGame('rock');
  }
});

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'p'){
    playGame('paper');
  }
});

document.body.addEventListener('keydown', (event) => {
  if(event.key === 's'){
    playGame('scissors');
  }
});

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r'){
    playGame('rock');
  }
});

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'Delete'){
    console.log('delete');
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = '';
    document.querySelector('.js-moves').innerHTML = '';
  }
});

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
