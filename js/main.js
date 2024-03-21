// Burger menu
$('.nav__burger').on('click', function (e) {
    e.preventDefault();
    $('.nav__list').slideToggle();
    $('.header-page').toggleClass('header-page__burger-open');
    $('.header').toggleClass('header__burger-open');
})

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

// Map
$('.contacts__map-btn--moscow').on('click', function (e) {
    e.preventDefault();
    $('#contacts__map-window').attr('src', 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d465979.11085226!2d37.61660764985341!3d55.77222625223984!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1710776938638!5m2!1sru!2sru');
    $('.contacts__map-btn').removeClass('contacts__map-btn--active');
    $(this).addClass('contacts__map-btn--active');
    $('.contacts__map-adress-item--adress').text('1-й Красногвардейский пр-д, д.1, к. 28,стр 2');
    
})
$('.contacts__map-btn--piter').on('click', function (e) {
    e.preventDefault();
    $('#contacts__map-window').attr('src', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d743191.8058471074!2d30.461823374472804!3d59.973781875640235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1710773204048!5m2!1sru!2sru');
    $('.contacts__map-btn').removeClass('contacts__map-btn--active');
    $(this).addClass('contacts__map-btn--active');
    $('.contacts__map-adress-item--adress').text('Покровская площадь, д.3, к. 5,стр 1');
})