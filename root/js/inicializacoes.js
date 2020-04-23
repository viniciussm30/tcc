$(document).ready(function() {
    // Slider
    $('.slider').slider({

        indicators: false
    });
    // Menu mobile 1
    $('#menuMobile1').sidenav();
    // Select
    $('select').formSelect();

    $('.next').click(function() {
        $('.carousel.carousel-slider').carousel('next')
    });


    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    });



});