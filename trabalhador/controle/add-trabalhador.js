$('.btnCadTrabalhador').click(function(e) {
    e.preventDefault();

    var dados = $('#cadTrabalhador').serialize();
    console.log(dados);
    var url = 'trabalhador/modelo/add-trabalhador.php';
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
                $('#conteudo').load('login/visao/login.html')
            } else {
                Swal.fire({
                    title: 'Cadastro',
                    text: dados.return,
                    type: 'error',
                    confirmButtonText: 'Tentar novamente'
                })

            }
        },
        error: function(dados) {
            Swal.fire({
                title: 'Cadastro',
                text: 'Não foi possível realizar seu cadastro.',
                type: 'error',
                confirmButtonText: 'Tentar novamente'
            })
        }
    })
})