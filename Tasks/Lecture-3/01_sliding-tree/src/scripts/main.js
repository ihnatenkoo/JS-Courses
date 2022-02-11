'use strict';

const tree = document.querySelector('.tree');
const ul = tree.querySelectorAll('ul');

ul.forEach((item) => {
  item.classList.add('hide');
});

tree.addEventListener('click', (event) => {
  const target = event.target;

  if (target.parentElement.tagName === 'UL') {
    if (target.firstElementChild) {
      target.firstElementChild.classList.toggle('hide');
      target.classList.toggle('active');
      target.classList.toggle('menu-in');
    }
  }
});