'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// document.querySelector('.number').textContent = secretNumber;





document.querySelector('.check').addEventListener('click', function () {
  const guesss = Number(document.querySelector('.guess').value);
  console.log(guesss, typeof guesss);

  if (!guesss) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guesss === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b464';
  } else if (guesss < secretNumber) {
    document.querySelector('.message').textContent = 'Toо Low!';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#70b534';
  } else if (guesss > secretNumber) {
    document.querySelector('.message').textContent = 'Toо Much!';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b774';
  } else if (score < 0) {
    document.querySelector('.message').textContent = 'You Lose The Game';
  }
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





