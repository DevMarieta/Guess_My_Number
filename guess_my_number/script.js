'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
 
  console.log(highscore);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#0AFFFF';


    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#5E5A80';
    
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too Much!';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#FFCBA4';
  }

  if (score <= 0) {
    document.querySelector('.message').textContent = 'You Lose The Game';
    document.querySelector('body').style.backgroundColor = '#F62817';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
});

// console.log(document.querySelector('.message').textContent); //DOM manipulation
// document.querySelector('.message').textContent = 'Corect Number!'; // декларираме промяната
// console.log(document.querySelector('.message').textContent); //DOM manipulation

// document.querySelector('.number').textContent = 13; //DOM manipulation
// document.querySelector('.score').textContent = 23;

// console.log(document.querySelector('.guess').value);
// console.log(document.querySelector('.guess').value = 23);

//   if (!guesss) {
//     document.querySelector('.message').textContent =
//     'No Number!';
//   } else if(guesss === secretNumber){
//         document.querySelector('.message').textContent =
//         'Correct Number!';
//       } else if (guesss > secretNumber) {
//         if(score 0){

//         document.querySelector('.message').textContent =
//         'Too High!';
//         score--;
//         document.querySelector('.score').textContent = score;
//       } else if (guesss < secretNumber) {
//         document.querySelector('.message').textContent =
//         'Toо Low!';
//         score--;
//         document.querySelector('.score').textContent = score;
//       } else {
//         document.querySelector('.message').textContent =
//         'Game Over!';
//     }
//       }
