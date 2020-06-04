$('.btnCadCliente').click(function(e) {
    e.preventDefault();
    var dados = $('#cadTrabalhador').serialize();
    console.log(dados);
    var url = '../modelo/add-trabalhador.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        data: dados,
        success: function(dados) {
            if (dados.return == true) {
                $('#conteudo').empty();
                $('#conteudo').load('../../paginaInicial.html');
            } else {
                console.log('Não foi possível')
            }
        }
    })
})