$(document).ready(function() {
    // carousel
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
    });
    $('.next').click(function() {
        $('.carousel').carousel('next');
    });
    // Menu mobile 1
    $('.sidenav').sidenav();
    // Select




    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    });

    $('.collapsible').collapsible();



});