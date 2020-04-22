$(document).ready(function() {
    let home = `
    <div class="slider">
    <ul class="slides">
        <li>
            <div class="caption center-align">
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                <h5>Lorem ipsum dolor sit amet consectetur</h5>
            </div>
        </li>
        <li>
            <div class="caption center-align">
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h3>
                <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto accusantium</h5>
            </div>
        </li>
    </ul>
</div>
    `
    $('#conteudo').append(home);
    hideLoading();

});


$('.aQuemSomos').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('cliente/visao/cadastroCliente.html');
});

$('.aHome').click(function() {
    let home = `
    <div class="slider">
    <ul class="slides">
        <li>
            <div class="caption center-align">
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                <h5>Lorem ipsum dolor sit amet consectetur</h5>
            </div>
        </li>
        <li>
            <div class="caption center-align">
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h3>
                <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto accusantium</h5>
            </div>
        </li>
    </ul>
</div>
    `
    $('#conteudo').empty();
    $('#conteudo').append(home)
});

$(document).ready(function() {
    // Menu mobile 1
    $('#menuMobile1').sidenav();
    // Select
    $('select').formSelect();
    // Slider
    $('.slider').slider();
});