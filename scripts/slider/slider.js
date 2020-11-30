const slider = document.querySelector('.swiper-container');


let mySwiper = new Swiper(slider, {

  slidesPerView: 3,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
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
