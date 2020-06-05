$('.btnCadTrabalhador').click(function(e) {
    e.preventDefault();
    var dados = $('#cadTrabalhador').serialize();
    console.log(dados);
    var url = 'trabalhador/modelo/add-trabalhador.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        data: dados,
        success: function(dados) {
            if (dados.return == true) {
                $('#conteudo').empty();
                $('#conteudo').load('paginaInicial.html');
                console.log('Enviado com sucesso');
            } else {
                console.log('Não foi possível');
            }
        }
    })
})