'use strict';

(function () {
  // var seasonTicketsTabs = Array.from(document.querySelector('.season-tickets__tabs').children);
  var seasonTicketsTabs = document.querySelector('.season-tickets__tabs').children;
  var seasonTicketsContents = document.querySelectorAll('.season-tickets__content');

  document.querySelector('.nojs').classList.remove('nojs');

  function setInitValueForTabsAndContents() {
    var tabs = seasonTicketsTabs;
    var contents = seasonTicketsContents;

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
      contents[i].classList.remove('active');
    }
  }

  function showContent() {
    setInitValueForTabsAndContents();

    var array = [];
    for (var i = 0; i < seasonTicketsTabs.length; i++) {
      array.push(seasonTicketsTabs[i])
    }

    var index = array.indexOf(this);

    this.classList.toggle('active');
    seasonTicketsContents[index].classList.toggle('active');
  }

  for (var i = 0; i < seasonTicketsTabs.length; i++) {
    seasonTicketsTabs[i].addEventListener('click', showContent);
  }

  var coachesSlider = new Swiper('.coaches__slider-container', {
    speed: 800,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 33
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40
      }
    },
    slideClass: 'coaches__slide',
    wrapperClass: 'coaches__slider-list',
    navigation: {
      nextEl: '.coaches__btn--next',
      prevEl: '.coaches__btn--prev'
    }
  });

  var reviewsSlider = new Swiper('.reviews__slider-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    slideClass: 'reviews__slide',
    wrapperClass: 'reviews__slider-list',
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev'
    }
  });
})();
