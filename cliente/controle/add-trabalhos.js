$('.btn-publicar').click(function(e) {
    e.preventDefault();
    var dados = $('#addTrabalho').serialize();
    console.log(dados);
    var url = '../modelo/add-trabalhos.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        data: dados,
        success: function(dados) {
            if (dados.return == true) {
                Swal.fire({
                    title: 'Trabalho',
                    text: 'Publicação efetuada com sucesso!',
                    type: 'success',
                    confirmButtonText: 'Feito!'
                })
                $('#conteudo').empty();
                $('#conteudo').load('indexCliente.html')
            } else {
                Swal.fire({
                    title: 'Cadastro',
                    text: dados.return,
                    type: 'error',
                    confirmButtonText: 'Tentar novamente'
                })

            }
        }
    })
})