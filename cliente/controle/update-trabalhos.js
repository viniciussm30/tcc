$('.btn-editar').click(function(e) {
    e.preventDefault();
    var dados = $('#editTrabalho').serialize();
    console.log(dados);
    var url = '../modelo/update-trabalhos.php';
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
                    text: 'Publicação editada com sucesso!',
                    type: 'success',
                    confirmButtonText: 'Feito!'
                })
                $('#conteudoCliente').empty();
                $('#conteudoCliente').load('indexCliente.html');
            } else {
                Swal.fire({
                    title: 'Edição',
                    text: dados.return,
                    type: 'error',
                    confirmButtonText: 'Tentar novamente'
                })

            }
        },
        error: function(dados) {
            Swal.fire({
                title: 'Edição',
                text: dados.return,
                type: 'error',
                confirmButtonText: 'Tentar novamente'
            })
        }

    })

})