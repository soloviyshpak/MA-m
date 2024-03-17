// Header background changer
function changeHeaderBkg() {
    if ($('.header__slide--danilkin').hasClass('slick-active')) {
        $('.header').css('background', `url('../img/header/danilkin/bgc.jpg') no-repeat`);
    } else if ($('.header__slide--illiya').hasClass('slick-active')) {
        $('.header').css('background', `url('../img/header/illiya/bgc.jpg') no-repeat`);
    } else if ($('.header__slide--pallada').hasClass('slick-active')) {
        $('.header').css('background', `url('../img/header/pallada/bgc.jpg') no-repeat`);
    }
}

// Header slider
$('.header__slider-line').slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    
})
$('.header__slide-prev').on('click', function (e){
    e.preventDefault();
    $('.header__slider-line').slick('slickPrev');
    changeHeaderBkg();
})
$('.header__slide-next').on('click', function (e){
    e.preventDefault();
    $('.header__slider-line').slick('slickNext');
    changeHeaderBkg();
})

// Project slider
$('.projects__slider').slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
})
$('.project__slider-prev').on('click', function (e) {
    e.preventDefault();
    $('.projects__slider').slick('slickPrev');
})
$('.project__slider-next').on('click', function (e) {
    e.preventDefault();
    $('.projects__slider').slick('slickNext');
})

// Progress slider
$('.progress__slider').slick({
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
})
$('.progress__slide-prev').on('click', function (e) {
    e.preventDefault();
    $('.progress__slider').slick('slickPrev');
})
$('.progress__slide-next').on('click', function (e) {
    e.preventDefault();
    $('.progress__slider').slick('slickNext');
})