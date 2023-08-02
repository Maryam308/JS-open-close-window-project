'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal');
const closing = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const opening = function () {
  console.log('button clicked!');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < openModal.length; i++) {
  console.log(openModal[i].addEventListener('click', opening));
}
closeModal.addEventListener('click', closing);
overlay.addEventListener('click', closing);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closing();
  }
});
