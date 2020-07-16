$(document).on('click', '.btn-editar-publicacao', function(e) {
    var dados = JSON.parse($(this).attr('data-publicacao'));
    $('#editTrabalho input[name="titulo"]').val(dados.titulo);
    $('#editTrabalho input[name="prazo"]').val(dados.prazo);
    $('#editTrabalho input[name="avaliacao"]').val(dados.avaliacao);
    $('#editTrabalho input[name="trabalhador"]').val(dados.idTrabalhador);
    $('#editTrabalho select[name="atuacao"]').val(dados.atuacao);
    $('#editTrabalho textarea[name="descricao"]').val(dados.descricao);
    $('#editTrabalho input[name="id"]').val(dados.id);
    $('#editar').modal('show');


});



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
                $('#editar').modal('hide');
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