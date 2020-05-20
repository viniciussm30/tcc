// Carregar a página
$(document).ready(function() {
    $('#conteudo').empty();
    $('#conteudo').load('home.html');
});

// Página de Login
$('.loginPage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('login.html');
});

// Página de Cadastrar-se
$('.cadastrarPage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('cadastrar.html')
});

// Página cadastro cliente
$('.cadastroClientePage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('cliente/visao/cadastroCliente.html')
});


// Página cadastro trabalhadors
$('.cadastroClientePage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('trabalhador/visao/cadastroTrabalhador.html')
});

// Página contato
$('.contatoPage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('contato.html')
});

// Voltar para o ínicio
$('.homePage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('home.html')
});


// Logado


// Página do perfil
$('.perfilPage').click(function() {
    $('#conteudoDois').empty();
    $('#conteudoDois').load('cliente/visao/perfilCliente.html')
});

$('.homePageLogin').click(function() {
    $('#conteudoDois').empty();
    $('#conteudoDois').load('paginaInicial.html');
});

$('.criarPublicacaoPage').click(function() {
    $('#conteudoDois').empty();
    $('#conteudoDois').load('criandoPublicacao.html')
})