'use strict';

const menuLink = document.querySelectorAll('.menu__link');
const subMenu = document.querySelectorAll('.sub-menu');
const subMenuLink = document.querySelectorAll('.sub-menu__link');
const subMenuOptions = document.querySelectorAll('.sub-menu__options');

const menuAnimate = (element, link) => {
  link.forEach((item, i) => {
    item.addEventListener('click', () => {
      element[i].classList.toggle('show');
      link[i].classList.toggle('active');
    });
  });
};

menuAnimate(subMenu, menuLink);
menuAnimate(subMenuOptions, subMenuLink);
