const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(elem => {
      elem.classList.add('fade-out');
      elem.classList.remove('fade-in');
    });
  } else {
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(elem => {
      elem.classList.remove('fade-out');
      elem.classList.add('fade-in');
    });
  }
});
