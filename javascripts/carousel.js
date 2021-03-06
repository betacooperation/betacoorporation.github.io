$(function() {
  var timer = null;

  function setTimer() {
    if(timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(nextSlide, 15000);
  }

  function nextSlide() {
    var slides = $(".carousel .carousel__item");
    var slideIndex;

    for(var i = 0; i < slides.length; i ++) {
      if($(slides[i]).hasClass("carousel__item--active")) {
        slideIndex = i;
        break;
      }
    }

    var nextSlideIndex = slideIndex + 1;
    if(nextSlideIndex >= slides.length) nextSlideIndex = 0;

    gotoSlide(nextSlideIndex);

    // neeeext
    setTimer();
  }

  function gotoSlide(nextSlideIndex) {
    var slides = $(".carousel .carousel__item");
    var slideIndex;

    for(var i = 0; i < slides.length; i ++) {
      if($(slides[i]).hasClass("carousel__item--active")) {
        slideIndex = i;
        break;
      }
    }

    var currentSlide = $(slides[slideIndex]);
    var nextSlide = $(slides[nextSlideIndex]);

    var left = nextSlide.position().left;

    $(".carousel .carousel__container").css("transform", "translateX(-" + left + "px)");

    currentSlide.removeClass("carousel__item--active");
    nextSlide.addClass("carousel__item--active");

    var pages = $(".carousel__page");
    pages.removeClass("carousel__page--active");
    $(pages[nextSlideIndex]).addClass("carousel__page--active");
  }

  function initPageButtons() {
    $(".carousel__page").click(function(event) {
      event.preventDefault();
      var page = $(event.currentTarget);
      gotoSlide(page.data("index"));
      setTimer();
    });
  }

  // let's go!
  setTimer();
  initPageButtons();
});