$('.btnCadCliente').click(function(e) {
    e.preventDefault();
    var dados = $('#cadCliente').serialize();
    console.log(dados);
    var url = 'cliente/modelo/add-cliente.php';
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        data: dados,
        success: function(dados) {
            if (dados.return == true) {
                Swal.fire({
                    title: 'Cadastro',
                    text: 'Cadastro efetuado com sucesso!',
                    type: 'success',
                    confirmButtonText: 'Feito!'
                })
                $('#conteudo').empty();
                $('#conteudo').load('trabalhos/visao/trabalhos.html')
            } else {
                Swal.fire({
                    title: 'Cadastro',
                    text: dados.return,
                    type: 'error',
                    confirmButtonText: 'Tentar novamente...'
                })

            }
        }
    })
})