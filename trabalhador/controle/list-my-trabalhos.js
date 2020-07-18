$('.meusTrabalhosPage').click(function() {
    var url = '../modelo/list-my-trabalhos.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            $('#conteudoTrabalhador').empty();
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
                        <p class="mb-1">${dados[i].atuacao}</p>
                        <small class="text-muted">${dados[i].avaliacao}</small>
                    </a>
                </div>
                `;


                $('#conteudoTrabalhador').append(meusTrabalhos);
            }
        },
        error: function(dados) {
            Swal.fire({
                // title: 'Atenção',
                text: 'Você não tem trabalhos para ser vizualizados',
                imageUrl: '../../img/1-removebg-preview-removebg-preview.png',
                imageWidth: 400,
                imageHeight: 150,
                imageAlt: 'Custom image',
                confirmButtonText: 'OK'
            })
        }
    })
})