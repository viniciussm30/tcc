$('.minhasPublicacoesPage').click(function() {
    var url = '../modelo/list-my-publicacoes.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            $('#conteudoCliente').empty();
            for (var i = 0; i < dados.length; i++) {
                let minhasPublicacoes = `
                <div class="list-group">
                    <div class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1 w-50">${dados[i].titulo}</h5>
                            <small class="text-muted">
                                <button class="btn btn-sm btn-danger btn-excluir-publicacao" data-exclui='${JSON.stringify(dados[i])}'><i class="mdi mdi-24px mdi-trash-can"></i></button>
                                <button class="btn btn-sm btn-danger btn-edit btn-editar-publicacao" data-publicacao='${JSON.stringify(dados[i])}'><i class="mdi mdi-24px mdi-pencil-outline"></i></button>
                            </small>
                        </div>
                        <p class="mb-1">${dados[i].statusTrabalho}</p>
                        <p class="mb-1">${dados[i].nomeCompleto}</p>
                        <p class="mb-1">${dados[i].atuacao}</p>
                        <small class="text-muted">${dados[i].avaliacao}</small>
                    </div>
                </div>

                
                `;


                $('#conteudoCliente').append(minhasPublicacoes);

            }
        },
        error: function(dados) {
            Swal.fire({
                type: 'info',
                text: 'Você não tem publicações para ser vizualizados',
                footer: '<img src="../../img/1-removebg-preview-removebg-preview.png" class="img-fluid" width="100px" alt="">',
                background: 'rgb(233, 233, 233)',
                confirmButtonText: 'OK',
                confirmButtonColor: 'rgb(32, 32, 32)'
            })
        }
    })
})

$(document).ready(function() {
    $('#trabalhador').keyup(function() {
        let find = 'nome=' + $('#trabalhador').val();
        $('#re').empty();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            data: find,
            url: '../modelo/find.php',
            success: function(dados) {
                for (var i = 0; dados.length > i; i++) {
                    let trab = `
                    <div id="re">${dados[i].nomeCompleto} / ${dados[i].cidade}</div>
                    
                    `;
                    var id = `${dados[i].id}`
                    $('#re').append(trab);
                    $('#re').click(function() {
                        var valorDaDiv = $("#re").text();
                        $("#trabalhador").val(valorDaDiv);
                        $("#trabalhadoor").val(id);



                    })
                }
            }
        })
    });
});