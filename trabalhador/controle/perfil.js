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
                <div class="container">
                    <label for="">Nome completo:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].nomeCompleto}">
                    <label for="">Apelido:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].apelido}">
                    <label for="">Data de nascimento:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].dataNascimento}">
                    <label for="">CPF:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].cpf}">
                    <label for="">Atuacao:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].atuacao}"> 
                    <label for="">Cidade:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].cidade}">
                    <label for="">Estado:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].estado}"> 
                    <label for="">WhatsApp:</label>
                    <input type="text" class="form-control disabled" disabled value="${dados[i].whatsapp}"> 
                </div>
                
                
            `;
                $('#conteudoTrabalhador').append(cont);
            }

        }
    })

})