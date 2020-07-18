$(document).ready(function() {
    var url = '../modelo/list-trabalhos.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {

            $('#conteudoTrabalhador').empty();
            for (var i = 0; i < dados.length; i++) {
                let trabalhos = `
                <div class="list-group">
                <a href="https://wa.me/55${dados[i].whatsapp}?text=Eu%20quero%20mais%20informações%20sobre%20seu%20trabalho%20publicado%20no%20Acha%20Trampo" class="list-group-item list-group-item-action flex-column align-items-start" target="_blank">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${dados[i].titulo}</h5>
                        <small>${dados[i].prazo}</small>
                        </div>
                        <p class="mb-1">${dados[i].descricao}</p>
                        <p>${dados[i].statusTrabalho}</p>
                        <p>${dados[i].cidadeEndereco} / ${dados[i].estadoEndereco}</p>
                        <small>${dados[i].atuacao}</small>
                </a>
                </div>
                `;
                $('#conteudoTrabalhador').append(trabalhos);
            }

        },
        error: function(dados) {
            $('#conteudoTrabalhador').empty();

            let trabalhos = `
                
                <div class="text-center">
                    Não existe trabalhos pendentes. Aguarde!
                </div>
                
                `;
            $('#conteudoTrabalhador').append(trabalhos);

        }
    });
});

$('.trabalhosPage').click(function() {
    var url = '../modelo/list-trabalhos.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            $('#conteudoTrabalhador').empty();
            for (var i = 0; i < dados.length; i++) {
                let trabalhos = `
                <div class="list-group">
                <a href="https://wa.me/55${dados[i].whatsapp}?text=Eu%20quero%20mais%20informações%20sobre%20seu%20trabalho%20publicado%20no%20Acha%20Trampo" class="list-group-item list-group-item-action flex-column align-items-start" target="_blank">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${dados[i].titulo}</h5>
                        <small>${dados[i].prazo}</small>
                        </div>
                        <p class="mb-1">${dados[i].descricao}</p>
                        <p>${dados[i].cidadeEndereco} / ${dados[i].estadoEndereco}</p>
                        <small>${dados[i].atuacao}</small>
                </a>
                </div>
                `;
                $('#conteudoTrabalhador').append(trabalhos);
            }
        },
        error: function(dados) {
            $('#conteudoTrabalhador').empty();

            let trabalhos = `
                <div class="text-center">
                    Não existe trabalhos pendentes. Aguarde!
                </div>
                `;
            $('#conteudoTrabalhador').append(trabalhos);

        }
    });
})