$(document).ready(function() {
    var url = '../modelo/list-trabalhadores.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            $('#conteudoCliente').empty();
            for (var i = 0; i < dados.length; i++) {
                let trabalhadores = `
                <div class="list-group">
                    <a href="https://wa.me/55${dados[i].whatsapp}?text=Eu%20tenho%20interesse%20no%20seus%20serviços.%20Te%20achei%20no%20Acha%20Trampo" target="_blank" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">${dados[i].nomeCompleto}</h5>
                            <small class="text-muted">
                                <button href="https://wa.me/55${dados[i].whatsapp}?text=Eu%20tenho%20interesse%20no%20seus%20serviços.%20Te%20achei%20no%20Acha%20Trampo" target="_blank" class="btn btn-sm btn-success"><i class="mdi mdi-24px mdi-whatsapp"></i></button>
                            </small>
                        </div>
                        <p class="mb-1">${dados[i].atuacao}</p>
                    </a>
                </div>
                `;


                $('#conteudoCliente').append(trabalhadores);
            }
        }
    });
});

$('.trabalhadoresPage').click(function() {
    var url = '../modelo/list-trabalhadores.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            $('#conteudoCliente').empty();
            for (var i = 0; i < dados.length; i++) {
                let trabalhadores = `
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">${dados[i].nomeCompleto}</h5>
                            <small class="text-muted">
                                <button class="btn btn-sm btn-success"><i class="mdi mdi-24px mdi-whatsapp"></i></button>
                            </small>
                        </div>
                        <p class="mb-1">${dados[i].atuacao}</p>
                    </a>
                </div>
                `;


                $('#conteudoCliente').append(trabalhadores);
            }
        }
    });

});