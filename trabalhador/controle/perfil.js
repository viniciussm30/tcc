$('.perfilTrabalhadorPage').click(function() {
    var url = '../modelo/perfil.php'
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados) {
            $('#conteudoTrabalhador').empty();
            for (var i = 0; i < dados.length; i++) {
                let cont = `
                <div class="container-fluid row mt-2 text-right">
                    <div class="col-12">
                        <button type="" class="btn btn-dark justify-content-end"><i class="mdi mdi-18px mdi-pencil"></i></button>
                        <button type="" class="btn btn-dark justify-content-end"><i class="mdi mdi-18px mdi-content-save"></i></button>
                    </div>
                </div>
                <div class="container text-center">
                    <h3>${dados[i].nomeCompleto}</h3>
                    <h3>${dados[i].apelido}</h3>
                </div>
                
                
            `;
                $('#conteudoTrabalhador').append(cont);
            }

        }
    })

})