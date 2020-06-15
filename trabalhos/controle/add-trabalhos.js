$('.btnCadTrabalhos').click(function(e) {
    e.preventDefault();
    var dados = $('#addTrabalhos').serialize();
    console.log(dados);
    var url = 'trabalhos/modelo/add-trabalhos.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        data: dados,
        success: function(dados) {
            if (dados.return == true) {

                $('#conteudo').empty();
                $('#conteudo').load('trabalhos/visao/trabalhos.html');
            } else {
                console.log('Não foi possível');
            }
        }
    })
})