$(document).ready(function() {
    // Slider
    $('.slider').slider();
    // Menu mobile 1
    $('#menuMobile1').sidenav();
    // Select
    $('select').formSelect();
    // Carousel
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        duration: 100
    });

});