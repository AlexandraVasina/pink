(function () {
  $('.rate-slider').slick({
    speed: 300,
    dots: true,
    centerMode: true,
    variableWidth: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    pauseOnFocus: true,
    nextArrow: false,
    prevArrow: false,
    dotsClass: 'rate__dots list dots',
  });

    $('.comments__slider').slick({
      speed: 300,
      infinite: true,
      centerMode: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      pauseOnFocus: true,
      centerPadding: 30,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: true,
            arrows: false,
            dotsClass: 'comments__dots list dots'
          }
        }
      ]
  });
})();
