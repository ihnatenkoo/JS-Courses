'use strict';

const mainImg = document.querySelector('.gallery__large-img ');
const sliderLinks = document.querySelectorAll('li.list-item > a');
const thumbImg = document.querySelectorAll('.gallery__thumb');

const setActiveLink = target => {
  thumbImg.forEach(link => {
    link.classList.remove('active');
  });
  target.classList.add('active');
};

sliderLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const linkHref = event.target.closest('.list-item__link');

    setActiveLink(event.target);
    mainImg.src = linkHref.href;
  });
});