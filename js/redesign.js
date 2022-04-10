

function SliderBox1__init() {
  const swiper = new Swiper(".slider-box-1 .swiper-container", {
    slidesPerView: 3,
    spaceBetween:24,
    navigation: {
      prevEl: ".slider-box-1__btn-left",
      nextEl: ".slider-box-1__btn-right",
    },
      loop: true,
      pagination: {
        el: '.slider-box-1 .swiper-pagination',
        clickable: true
    },
  });
}

SliderBox1__init();


function SliderBox2__init() {
  const swiper = new Swiper(".slider-box-2 .swiper-container", {
    slidesPerView: 3,
    spaceBetween:24,
    navigation: {
      prevEl: ".slider-box-2__btn-left",
      nextEl: ".slider-box-2__btn-right",
    },
    loop: true,
    pagination: {
      el: '.slider-box-2 .swiper-pagination',
      clickable: true
  },
  });
}

SliderBox2__init();


function SliderBox3__init() {
  const swiper = new Swiper(".slider-box-3 .swiper-container", {
    slidesPerView: 2,
    spaceBetween:24,
    navigation: {
      prevEl: ".slider-box-3__btn-left",
      nextEl: ".slider-box-3__btn-right",
    },
    loop: true,
    pagination: {
      el: '.slider-box-3 .swiper-pagination',
      clickable: true
  },
  });
}

SliderBox3__init();


