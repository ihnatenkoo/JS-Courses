const SlidesPlugin = (activeSlide = 0) => {
  let currentSlide = activeSlide;
  const slides = document.querySelectorAll('.slide');

  slides[activeSlide].classList.add('active');

  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      clearActiveClasses(slides);
      slide.classList.add('active');

      clearInterval(interval);
    });
  });

  const clearActiveClasses = (slidesArr) => {
    slidesArr.forEach((item) => {
      item.classList.remove('active');
    });
  };

  const changeSlide = () => {
    clearActiveClasses(slides);

    if (currentSlide > slides.length - 1) {
      currentSlide = 0;
    } 

    slides[currentSlide].classList.add('active');
    currentSlide += 1;
  };

  const interval = setInterval(() => changeSlide(), 2000);
};

SlidesPlugin();


