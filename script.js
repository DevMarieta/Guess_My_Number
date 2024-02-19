'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.oiverlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.open-modal');
console.log(btnOpenModal);

for( i= 0; i<btnOpenModal.length; btnOpenModal++){
console.log(btnOpenModal[i].textContent);
}