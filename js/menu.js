// Carregar a página
$(document).ready(function() {

    let home = `

    <!-- Carrousel --!>
    <div class="carousel carousel-slider center">
    <div class="carousel-fixed-item center">
        <a class="btn waves-effect white grey-text darken-text-2 next">PRÓXIMO</a>
    </div>
    <div class="carousel-item red white-text" href="#one!">
        <h2>Conecte-se com a gente</h2>
        <p class="white-text">Facilite sua busca por trabalhos</p>
        <button class="btn btn-large cadastroTrabalhadorPage">Ser um trabalhador</button>
    </div>
    <div class="carousel-item amber white-text" href="#two!">
        <h2>Encontre trabalhadores mais fácil</h2>
        <p class="white-text">Aqui vocês vão encontrar trabalhadores informais que irão atender vocês</p>
        <button class="btn btn-large cadastroClientePage">Ser um cliente</button>
    </div>
</div>


<!-- Quem somos --!>
<div class="row">
    <div class="col s12 l12 scrollspy" id="quemSomos">
        <h3>Quem somos?</h3>
        <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero culpa sequi velit unde recusandae ipsam fuga enim. Excepturi ab consectetur, obcaecati, porro deserunt voluptate libero molestias soluta quaerat consequuntur explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sed dolor dolore est quae neque, cum exercitationem accusantium velit voluptatem tempora fugiat pariatur temporibus placeat illo perspiciatis dolores quas assumenda. lorem</span></p>
    </div>
</div>


<!-- Como funciona --!>
<div class="row ">
    <h3 class="">Como funciona</h3>
    <div class="col s12 l4 scrollspy" id="comoFunciona">
        <div class="row">
            <div class="col s12 ">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Imagem 1</span>
                        <p><i class="material-icons large">
                        warning
                        </i></p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="col s12 l4 scrollspy" id="comoFunciona">
        <div class="row">
            <div class="col s12 ">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Imagem 2</span>
                        <p><i class="material-icons large">
                        warning
                        </i></p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="col s12 l4 scrollspy" id="comoFunciona">
        <div class="row">
            <div class="col s12 ">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Imagem 3</span>
                        <p><i class="material-icons large">
                        warning
                        </i></p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>


<!-- perguntas frequentes --!>
<div class="row">
    <div class="col s12">
        <h3 class="">Perguntas frequentes</h3>
        <ul class="collapsible z-depth-0">
            <li>
                <div class="collapsible-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium? Quod corrupti debitis alias error exercitationem odio laudantium libero hic tempore natus, rerum enim eveniet culpa illum, voluptas recusandae consequuntur?</span></div>
            </li>
            <li>
                <div class="collapsible-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium? Quod corrupti debitis alias error exercitationem odio laudantium libero hic tempore natus, rerum enim eveniet culpa illum, voluptas recusandae consequuntur?</span></div>
            </li>
            <li>
                <div class="collapsible-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium? Quod corrupti debitis alias error exercitationem odio laudantium libero hic tempore natus, rerum enim eveniet culpa illum, voluptas recusandae consequuntur?</span></div>
            </li>
            <li>
                <div class="collapsible-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium? Quod corrupti debitis alias error exercitationem odio laudantium libero hic tempore natus, rerum enim eveniet culpa illum, voluptas recusandae consequuntur?</span></div>
            </li>
            <li>
                <div class="collapsible-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium? Quod corrupti debitis alias error exercitationem odio laudantium libero hic tempore natus, rerum enim eveniet culpa illum, voluptas recusandae consequuntur?</span></div>
            </li>

        </ul>
    </div>
</div>


<!-- botões --!>
<div class="row center hide-on-med-and-up">

    <h2>Vou me cadastrar como</h2>
    <div class="col s12">
    
    <a class="btn btn-large cadastroTrabalhadorPage">Trabalhador</a>
    <a class="btn btn-large cadastroClientePage">Cliente</a>
    </div>
</div>

<div class="cadastrando hide-on-small-and-down">
        <div class="col s12 l3 center">
            <div class="card blue-grey lighten-5 cardCadastro">
                <div class="card-content white-text">
                    <h4 class="tituloCard black-text">Vou me cadastrar como</h4>
                    <span>
                        <a class="btn btn-large">Trabalhador</a>
                        <a class="btn btn-large">Cliente</a>
                    </span>
                </div>

            </div>
        </div>
    </div>
<!-- Inicialiações --!>
    <script>
        $('.carousel.carousel-slider').carousel({
            fullWidth: true,
        });
        $('.next').click(function() {
            $('.carousel').carousel('next');
        });
        $('.collapsible').collapsible();
    </script>
    `
    $('#conteudo').empty();
    $('#conteudo').append(home);


});



// Página de Login
$('.loginPage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('login.html');
});

// Página de Cadastrar-se
$('.cadastrarPage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('cadastrar.html')
});

// Página cadastro trabalhador
$('.cadastroTrabalhadorPage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('cliente\visao\cadastroCliente.html')
});

// Página contato
$('.contatoPage').click(function() {
    $('#conteudo').empty();
    $('#conteudo').load('contato.html')
});

// Voltar para o ínicio
$('.homePage').click(function() {
    let home = `
    

    <div class="carousel carousel-slider center">
    <div class="carousel-fixed-item center">
        <a class="btn waves-effect white grey-text darken-text-2 next">PRÓXIMO</a>
    </div>
    <div class="carousel-item red white-text" href="#one!">
        <h2>Conecte-se com a gente</h2>
        <p class="white-text">Facilite sua busca por trabalhos</p>
        <button class="btn btn-large cadastroTrabalhadorPage">Ser um trabalhador</button>
    </div>
    <div class="carousel-item amber white-text" href="#two!">
        <h2>Encontre trabalhadores mais fácil</h2>
        <p class="white-text">Aqui vocês vão encontrar trabalhadores informais que irão atender vocês</p>
        <button class="btn btn-large cadastroClientePage">Ser um cliente</button>
    </div>

</div>




<div class="row">
    <div class="col s12 l12 scrollspy" id="quemSomos">
        <h3>Quem somos?</h3>
        <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero culpa sequi velit unde recusandae ipsam fuga enim. Excepturi ab consectetur, obcaecati, porro deserunt voluptate libero molestias soluta quaerat consequuntur explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sed dolor dolore est quae neque, cum exercitationem accusantium velit voluptatem tempora fugiat pariatur temporibus placeat illo perspiciatis dolores quas assumenda. lorem</span></p>
    </div>
</div>

<div class="row ">
    <h3 class="">Como funciona</h3>
    <div class="col s12 l4 scrollspy" id="comoFunciona">
        <div class="row">
            <div class="col s12 ">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Imagem 1</span>
                        <p><i class="material-icons large">
                        warning
                        </i></p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="col s12 l4 scrollspy" id="comoFunciona">
        <div class="row">
            <div class="col s12 ">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Imagem 2</span>
                        <p><i class="material-icons large">
                        warning
                        </i></p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="col s12 l4 scrollspy" id="comoFunciona">
        <div class="row">
            <div class="col s12 ">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Imagem 3</span>
                        <p><i class="material-icons large">
                        warning
                        </i></p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col s12">
        <h3 class="">Perguntas frequentes</h3>
        <ul class="collapsible z-depth-0">
            <li>
                <div class="collapsible-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium? Quod corrupti debitis alias error exercitationem odio laudantium libero hic tempore natus, rerum enim eveniet culpa illum, voluptas recusandae consequuntur?</span></div>
            </li>
            <li>
                <div class="collapsible-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium? Quod corrupti debitis alias error exercitationem odio laudantium libero hic tempore natus, rerum enim eveniet culpa illum, voluptas recusandae consequuntur?</span></div>
            </li>
            <li>
                <div class="collapsible-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium? Quod corrupti debitis alias error exercitationem odio laudantium libero hic tempore natus, rerum enim eveniet culpa illum, voluptas recusandae consequuntur?</span></div>
            </li>
            <li>
                <div class="collapsible-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium? Quod corrupti debitis alias error exercitationem odio laudantium libero hic tempore natus, rerum enim eveniet culpa illum, voluptas recusandae consequuntur?</span></div>
            </li>
            <li>
                <div class="collapsible-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium? Quod corrupti debitis alias error exercitationem odio laudantium libero hic tempore natus, rerum enim eveniet culpa illum, voluptas recusandae consequuntur?</span></div>
            </li>

        </ul>
    </div>
</div>



<div class="row center hide-on-med-and-up">

    <h2>Vou me cadastrar como</h2>
    <div class="col s12">
    
    <a class="btn btn-large cadastroTrabalhadorPage">Trabalhador</a>
    <a class="btn btn-large cadastroClientePage">Cliente</a>
    </div>
</div>

<div class="cadastrando hide-on-small-and-down">
        <div class="col s12 l3 center">
            <div class="card blue-grey lighten-5 cardCadastro">
                <div class="card-content white-text">
                    <h4 class="tituloCard black-text">Vou me cadastrar como</h4>
                    <span>
                        <a class="btn btn-large">Trabalhador</a>
                        <a class="btn btn-large">Cliente</a>
                    </span>
                </div>

            </div>
        </div>
    </div>
<!-- Inicialiações --!>
    <script>
        $('.carousel.carousel-slider').carousel({
            fullWidth: true,
        });
        $('.next').click(function() {
            $('.carousel').carousel('next');
        });
        $('.collapsible').collapsible();
    </script>
    `
    $('#conteudo').empty();
    $('#conteudo').append(home)
});