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
    $('#conteudo').load('login/login.html')

});

// Página Inicial
$('.homePage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('paginaInicial.html');
});

// Test
$('.testePage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('trabalhos/visao/trabalhos.html')
})

// Conteudo depois de Login