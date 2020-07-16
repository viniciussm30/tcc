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
                    <div href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1 w-50">${dados[i].titulo}</h5>
                            <small class="text-muted">
                                <button class="btn btn-sm btn-danger"><i class="mdi mdi-24px mdi-trash-can"></i></button>
                                <button class="btn btn-sm btn-danger btn-edit btn-editar-publicacao" data-publicacao='${JSON.stringify(dados[i])}'><i class="mdi mdi-24px mdi-pencil-outline"></i></button>
                            </small>
                        </div>
                        <p class="mb-1">Trabalhador</p>
                        <p class="mb-1">${dados[i].atuacao}</p>
                        <small class="text-muted">${dados[i].avaliacao}</small>
                    </div>
                </div>

    
                `;


                $('#conteudoCliente').append(minhasPublicacoes);

            }
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
                    <option data-value="${dados[i].id}" value="${dados[i].nomeCompleto} / ${dados[i].cidade}" id="re"></option>
                    
                    `;

                    $('#re').append(trab);
                }
            }
        })
    });
});