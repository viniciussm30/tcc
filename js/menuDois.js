$('.loginClientePage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('login/visao/loginCliente.html');
});

$('.loginTrabalhadorPage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('login/visao/loginTrabalhador.html');
});

$('.cadClientePage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('cliente/visao/cad-cliente.html');
});

$('.cadTrabalhadorPage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('trabalhador/visao/cad-trabalhador.html');
});