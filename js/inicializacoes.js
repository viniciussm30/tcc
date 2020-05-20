$(document).ready(function() {
    // carousel
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
    });
    $('.next').click(function() {
        // Botão para ir para o próximo
        $('.carousel').carousel('next');
    });
    // Menu mobile 
    $('.sidenav').sidenav();
    // Select
    $('select').formSelect();
    // Parte das perguntas frequentes (index.html)
    $('.collapsible').collapsible();
    // Botão flutuante
    $('.fixed-action-btn').floatingActionButton();

});