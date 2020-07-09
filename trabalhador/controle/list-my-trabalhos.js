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
                let meusTrabalhos = `
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">${dados[i].titulo}</h5>
                            <small class="text-muted">
                                <button class="btn btn-sm btn-danger"><i class="mdi mdi-24px mdi-trash-can"></i></button>
                                <button class="btn btn-sm btn-danger"><i class="mdi mdi-24px mdi-pencil-outline"></i></button>
                            </small>
                        </div>
                        <p class="mb-1">Trabalhador</p>
                        <p class="mb-1">${dados[i].atuacao}</p>
                        <small class="text-muted">Avaliação</small>
                    </a>
                </div>
                `;


                $('#conteudoCliente').append(meusTrabalhos);
            }
        }
    })
})