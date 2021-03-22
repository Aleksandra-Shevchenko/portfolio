const slider = document.querySelector('.slider__container');


let mySwiper = new Swiper(slider, {

  slidesPerView: 3,
  spaceBetween: 50,

  containerModifierClass: 'slider__container_',
  wrapperClass: 'slider__wrapper',
  slideClass: 'slider__slide',
  slideActiveClass: 'slider__slide_active',
  slideNextClass: 'slider__slide_next',
  slidePrevClass: 'slider__slide_prev',
  slideDuplicateActiveClass: 'slider__slide_duplicate_active',
  slideDuplicateClass: 'slider__slide_duplicate',
  slideDuplicateNextClass: 'slider__slide_duplicate_next',
  slideDuplicatePrevClass: 'slider__slide_duplicate_prev',
  slideVisibleClass: 'slider__slide_visible',
  slideBlankClass: 'slider__slide_visible_invisible_blank',

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,

    // bulletActiveClass: 'slider__pagination_bullet_active',
    // bulletClass: 'slider__pagination_bullet',
    // modifierClass: 'slider-pagination_',
    // clickableClass: 'slider__pagination_clickable',
  },

  loop: true,
  // slidesPerGroup: 2,
  slideToClickedSlide: true,
  centeredSlides: true,
  preventClicks: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})
