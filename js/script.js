'use strict';

window.addEventListener('load', function () {
  gsap.registerPlugin(TextPlugin);

  // *** Selects Elements ***
  // *** Section 01 ***
  const section01 = document.querySelector('.section01');
  const headingPrimary = document.querySelector('.heading__primary');
  const description = document.querySelector('.description');
  const tlSection01 = gsap.timeline();
  // *** End of Section 01 ***

  // *** Section 02 ***
  const section02 = document.querySelector('.section02');
  const toothless = document.querySelectorAll('.toothless');
  const circles = document.querySelectorAll('.toothless-04__circle');
  const textBubble = document.querySelector('.toothless-04__textbubble');
  const tlSection02 = gsap.timeline({ delay: 5 });
  // *** End of Section 02 ***

  // *** Section 03 ***
  const section03 = document.querySelector('.section03');
  const tlSection03 = gsap.timeline({ delay: 14 });
  const overlay = document.querySelector('.overlay');
  const sideLeft = document.querySelector('.section03__side-left');
  const sideRight = document.querySelector('.section03__side-right');
  const section03Container = document.querySelector('.section03__container');
  const gooeyWrapper = document.querySelector('.gooey-wrapper');
  const gooeyBalls = document.querySelectorAll('.gooey');
  const [gooey1, gooey2, gooey3, gooey4] = gooeyBalls;
  // *** End of Section 03 ***

  // *** Section 04 ***
  const section04 = document.querySelector('.section04');
  const tlSection04 = gsap.timeline({ delay: 25 });
  const section04Title = document.querySelectorAll(
    '.section04__title .section04__title-span'
  );
  const slider = document.querySelector('.slider');
  const sliderContainer = document.querySelector('.slider__container');
  let x = 0;
  let sliderFuncDelay = 2000;
  // *** End of Section 04 ***

  // *** End of Selects Elements ***

  // *** GSAP TIMELINES ***
  // *** Timeline Section 01 ***
  tlSection01
    .set(section01, { display: 'flex' })
    .to(description, {
      duration: 2,
      text: 'Learn how to train your dragon with Toothless in an exciting image slider',
      ease: 'none',
    })
    .to(headingPrimary, {
      duration: 1.25,
      text: 'Toothless and His World',
      ease: 'none',
    });
  // *** End of Timeline Section 01 ***

  // *** Timeline Section 02 ***
  tlSection02
    .set(section01, { display: 'none' })
    .set(section02, { display: 'block' })
    .from(toothless[0], { top: '-30rem', duration: 0.5, autoAlpha: 0 })
    .to(toothless[0], { top: '0' })
    .to(toothless[0], { top: '-30rem', duration: 0.3 })
    .from(toothless[1], { left: '-30rem', duration: 0.3 })
    .to(toothless[1], { left: '0' })
    .to(toothless[1], { left: '-30rem', duration: 0.3 })
    .from(toothless[2], { right: '-30rem', duration: 0.3 })
    .to(toothless[2], { right: '0' })
    .to(toothless[2], { right: '-30rem', duration: 0.3 })
    .from(toothless[3], { bottom: '-50rem', duration: 0.5 })
    .to(toothless[3], { bottom: '0' })
    .from([circles[0], circles[1], circles[2], textBubble], {
      autoAlpha: 0,
      stagger: 0.2,
    })
    .to([circles[0], circles[1], circles[2], textBubble].reverse(), {
      autoAlpha: 0,
      stagger: 0.2,
      delay: 1,
    })
    .to(toothless[3], { bottom: '-50rem', duration: 0.3, delay: 0.5 })
    .set(section02, { display: 'none', delay: 0.25 });
  // *** End of Timeline Section 02 ***

  // *** Timeline Section 03 ***
  tlSection03
    .set(section03, {
      display: 'block',
    })
    .add(() => {
      // *** Overlay && Side && Right Sides ***
      overlay.style.animation = 'slideDown 3s linear forwards';
      sideLeft.style.animation = 'moveLeft 2s ease-in-out 3.2s forwards';
      sideRight.style.animation = 'moveRight 2s ease-in-out 3.2s forwards';
      // *** End of Overlay && Side && Right Sides ***

      // *** Container && Wrapper ***
      section03Container.style.animation = 'scale-section 2s ease 10s forwards';
      gooeyWrapper.style.animation = 'fadeIn 0.25s linear 3.57s forwards';
      // *** End of Container && Wrapper ***

      // *** Gooey Balls ***
      gooey1.style.animation = 'gooey 3s linear infinite';
      gooey2.style.animation = 'gooey-2 3s linear 5s forwards';
      gooey3.style.animation = 'gooey-3 3s linear 6s forwards';
      gooey4.style.animation = 'gooey-4 3s linear 7s forwards';
      // *** End of Gooey Balls ***
    });
  // *** End of Timeline Section 03 ***

  // *** Timeline Section 04 && Section 03 Display None ***
  tlSection04
    .set(section04, { display: 'flex' })
    .set(section03, { display: 'none' })
    .from(section04Title, {
      autoAlpha: 0,
      duration: 0.7,
      x: 50,
      ease: 'back.out',
      stagger: 0.2,
      delay: 0.5,
    })
    .from(slider, { autoAlpha: 0, y: 300, duration: 1, ease: 'back.out(2.2)' })
    .add(() => {
      sliderFunc();
    }, '-=1');

  // *** Slider Function ***
  function sliderFunc() {
    sliderContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;

    setTimeout(() => {
      x -= 45;

      sliderFunc();
    }, sliderFuncDelay);
  }
  // *** End of Slider Function ***

  // *** End of Timeline Section 04 ***
});
// *** ENd of GSAP TIMELINES ***
