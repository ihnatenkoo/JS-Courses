const SlidesPlugin = (activeSlide = 0) => {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.btn-prev');
  const nextBtn = document.querySelector('.btn-next');

  let currentSlide = activeSlide;
 
  slides[activeSlide].classList.add('active');

  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      clearActiveClasses(slides);
      slide.classList.add('active');

      clearInterval(interval);
    });
  });

  const bthControl = (btn, changeValue) => {
    btn.addEventListener('click', () => {
      clearInterval(interval);
      changeSlide(changeValue);
    });
  };

  bthControl(nextBtn, 1);
  bthControl(prevBtn, -1);


  const clearActiveClasses = (slidesArr) => {
    slidesArr.forEach((item) => {
      item.classList.remove('active');
    });
  };

  const changeSlide = (value) => {
    currentSlide += value;
    clearActiveClasses(slides);

    if (currentSlide > slides.length - 1) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add('active');
  };

  const interval = setInterval(() => changeSlide(1), 2000);
};

SlidesPlugin();


