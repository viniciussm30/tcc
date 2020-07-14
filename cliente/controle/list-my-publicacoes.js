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
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">${dados[i].titulo}</h5>
                            <small class="text-muted">
                                <button class="btn btn-sm btn-danger"><i class="mdi mdi-24px mdi-trash-can"></i></button>
                                <button class="btn btn-sm btn-danger btn-edit" onclick="$('#editar').modal('show');"><i class="mdi mdi-24px mdi-pencil-outline"></i></button>
                            </small>
                        </div>
                        <p class="mb-1">Trabalhador</p>
                        <p class="mb-1">${dados[i].atuacao}</p>
                        <small class="text-muted">${dados[i].avaliacao}</small>
                    </a>
                </div>

                <div class="modal fade" id="editar">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Adicionar trabalho</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <form id="editTrabalho">
                        <div class="form-row">
                            <div class="form-group col-12">
                                <label for="">Título*</label>
                                <input type="text" class="form-control" name="titulo" placeholder="Digite o título" value="${dados[i].titulo}">
                            </div>
                            <div class="form-group col-12">
                                <label for="">Data ou Prazo</label>
                                <input type="date" class="form-control" name="prazo" placeholder="Digite o título" value="${dados[i].prazo}">
                            </div>
                            <div class="form-group col-12">
                                <label for="">Avaliacão</label>
                                <input type="number" class="form-control" name="avaliacao" placeholder="Digite a avaliação" value="${dados[i].avaliacao}" max="5" min="0">
                            </div>
                            <div class="form-group col-12">
                                <label for="">Trabalhador</label>
                                <input type="text" class="form-control" name="trabalhador" placeholder="Digite o nome do trabalhador" value="${dados[i].trabalhador}" max="5" min="0">
                            </div>
                            <div class="form-group col-12">
                                <label for="atuacao">Atuação*</label>
                                <select name="atuacao" class="form-control">
                                <option selected value="${dados[i].atuacao}">${dados[i].atuacao}</option>
                                <option value="Eletricista">Eletricista</option>
                                <option value="Encanador">Encanador</option>
                                <option value="Manicure">Manicure</option>
                                <option value="Babá">Babá</option>
                                <option value="Diarista">Diarista</option>
                            </select>
                            </div>
                            <div class="form-group col-12">
                                <label for="">Descrição</label>
                                <textarea name="descricao" id="descricao" class="form-control" cols="30" rows="10">${dados[i].descricao}</textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                    <button type="button" class="btn btn-success btn-editar">Editar</button>
                </div>
            </div>
        </div>
    </div>
    <script src="../controle/update-trabalhos.js"></script>
                `;


                $('#conteudoCliente').append(minhasPublicacoes);

            }
        }
    })
})