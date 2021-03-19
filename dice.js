// Fundamental game variables
var scores, roundScore, activePlayer, gamePlaying;

// Start game
init();

// Dice roll
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying) {

        // 1. Random Number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Result 
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';    

        // 3. Different to 1 
        if(dice !== 1) {       
            
            roundScore += dice;    
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player's turn  
            nextPlayer();
        }

    }
    
});

// Hold points
document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if(gamePlaying) {

        // 1. Adding score
        scores[activePlayer] += roundScore; 

        // 2. Updating the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // 3. Checking if the player won
        if(scores[activePlayer] >= 100) {

            // Changing the name to 'Winner!'
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            // Hide dice
            document.querySelector('.dice').style.display = 'none';

            // Adding the 'winner' class to the player
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
 
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
 
            gamePlaying = false;

        } else {
    
            nextPlayer();
        }
    }
});

// New game 
document.querySelector(".btn-new").addEventListener('click', init);

function init() {

  gamePlaying = true;

  scores = [0, 0];

  activePlayer = 0;

  roundScore = 0;

  // Hide dice
  document.querySelector('.dice').style.display = 'none';

  // Score 0 Style
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0'; 

  // Removing the 'winner status' Style
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2'; 
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  // Removing the 'active status' Style
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
 
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}

// Change turns
function nextPlayer() {
    
    // Turn change if 1 is rolled
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}
