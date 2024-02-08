'use strict';
// console.log(document.querySelector('.message').textContent); //DOM manipulation
// document.querySelector('.message').textContent = 'Corect Number!'; // декларираме промяната
// console.log(document.querySelector('.message').textContent); //DOM manipulation

// document.querySelector('.number').textContent = 13; //DOM manipulation
// document.querySelector('.score').textContent = 23;

// console.log(document.querySelector('.guess').value);
// console.log(document.querySelector('.guess').value = 23);
const secretNumber = Math.trunc(Math.random() * 20) + 1;


document.querySelector('.check').addEventListener
('click', function () {
  const guesss = Number(document.querySelector(
    '.guess').value);
  console.log(guesss, typeof guesss);

  if (!guesss) {
    document.querySelector('.message').textContent = 
    'No Number!';
  }else if(guesss === secretNumber) {
    document.querySelector(".message").textContent = 
    'Corect Number!';
  }else if(guesss > secretNumber) {
    document.querySelector(".message").textContent = 
    'To Low!';
});
