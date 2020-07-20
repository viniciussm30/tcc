// Carregar a página
$(document).ready(function() {
    $('#conteudo').empty();
    $('#conteudo').load('paginaInicial.html');

});

// Página de cadastro do cliente
$('.cadClientePage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('cliente/visao/cad-cliente.html');
});

// Página de cadastro do trabalhador
$('.cadTrabalhadorPage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('trabalhador/visao/cad-trabalhador.html');
});

// Página de Login
$('.loginPage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('login/visao/login.html');

});



// Página Inicial
$('.homePage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('paginaInicial.html');
});

$('.criarPublicacao').click(function() {
    $('#criar').modal('show');
    $('#addTrabalho').trigger('reset');
});

$('.downloadPage').click(function() {
    Swal.fire({
        type: 'info',
        text: 'Em breve disponível para download',
        footer: '<img src="img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
        background: 'rgb(233, 233, 233)',
        confirmButtonText: 'OK',
        confirmButtonColor: 'rgb(32, 32, 32)'
    })
});

$('.loginClientePage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('login/visao/loginCliente.html');
});

$('.loginTrabalhadorPage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('login/visao/loginTrabalhador.html');
});