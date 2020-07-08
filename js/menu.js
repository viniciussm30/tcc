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


// Conteudo depois de Login (Cliente)
$(document).ready(function() {
    $('#conteudoCliente').empty();
    $('#conteudoCliente').load('trabalhadores.html');

});

// Home cliente
$('.trabalhadoresPage').click(function() {
    $('#conteudoCliente').empty();
    $('#conteudoCliente').load('trabalhadores.html');

});

$('.minhasPublicacoesPage').click(function() {
    $('#conteudoCliente').empty();
    $('#conteudoCliente').load('minhasPublicacoes.html');

});

$('.criarPublicacao').click(function() {
    $('#criar').modal('show');
});


// Trabalhador
$(document).ready(function() {
    $('#conteudoTrabalhador').empty();
    $('#conteudoTrabalhador').load('trabalhosPublicados.html');

});