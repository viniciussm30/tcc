$(document).on('click', '.btn-editar-publicacao', function(e) {
    var dados = JSON.parse($(this).attr('data-publicacao'));
    $('#editTrabalho input[name="titulo"]').val(dados.titulo);
    $('#editTrabalho input[name="prazo"]').val(dados.prazo);
    $('#editTrabalho input[name="avaliacao"]').val(dados.avaliacao);
    $('#editTrabalho input[name="trabalhador"]').val(dados.nomeCompleto);
    $('#editTrabalho input[name="trabalhadoor"]').val(dados.idTrabalhador);
    $('#editTrabalho select[name="atuacao"]').val(dados.atuacao);
    $('#editTrabalho textarea[name="descricao"]').val(dados.descricao);
    $('#editTrabalho input[name="id"]').val(dados.id);
    $('#editTrabalho select[name="statusTrabalho"]').val(dados.situacao);
    $('#editar').modal('show');


});



$('.btn-editar').click(function(e) {
    e.preventDefault();

    var dados = $('#editTrabalho').serialize();
    // console.log(dados);
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
                    text: 'Perfil editado com sucesso!',
                    type: 'success',
                    confirmButtonText: 'Feito!',
                    footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
                }).then((result) => {
                    if (result.value) {
                        location.reload();
                    }
                })

            } else {
                Swal.fire({
                    title: 'Edição',
                    text: 'Não foi possível atualizar sua publicação devido a um erro interno',
                    type: 'error',
                    confirmButtonText: 'Tentar novamente',
                    footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
                })

            }
        },
        error: function(dados) {
            Swal.fire({
                title: 'Edição',
                text: 'Não foi possível atualizar sua publicação',
                type: 'error',
                confirmButtonText: 'Tentar novamente',
                footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
            })
        }

    })

})