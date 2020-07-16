$(document).ready(function() {



    $('.nome').hide();
    $('.nascimento').hide();
    $('.cpf').hide();
    $('.atuacao').hide();
    $('.estados').hide();
    $('.cidades').hide();
    $('.telefone').hide();
    $('.email').hide();
    $('.senha').hide();
    $('.termos').hide();
    $('.endereco').hide();
    $('.numero').hide();
    $('.bairro').hide();
    $('.cep').hide();



    // Controlando quando os lembretes para que eles apareçam quando o cursor estiver focado
    $('#nome').focusin(function() {
        $('.nome').show('slow');
    });
    $('#nascimento').focusin(function() {
        $('.nascimento').show('slow');
    });
    $('#cpf').focusin(function() {
        $('.cpf').show('slow');
    });
    $('#atuacao').focusin(function() {
        $('.atuacao').show('slow');
    });
    $('#estados').focusin(function() {
        $('.estados').show('slow');
    });
    $('#cidades').focusin(function() {
        $('.cidades').show('slow');
    });
    $('#telefone').focusin(function() {
        $('.telefone').show('slow');
    });
    $('#email').focusin(function() {
        $('.email').show('slow');
    });
    $('#senha').focusin(function() {
        $('.senha').show('slow');
    });
    $('#termos').focusin(function() {
        $('.termos').show('slow');
    });
    $('#endereco').focusin(function() {
        $('.endereco').show('slow');
    });
    $('#numero').focusin(function() {
        $('.numero').show('slow');
    });
    $('#bairro').focusin(function() {
        $('.bairro').show('slow');
    });
    $('#cep').focusin(function() {
        $('.cep').show('slow');
    });

    // Controlando o lembretes para desaparecerem quando o cursor estiver fora do input
    $('#nome').focusout(function() {

        if ($('#nome').val() == "") {
            $('.nome').empty();
            $('.nome').removeClass('text-info').addClass('text-danger');
            $('.nome').append('*Por favor preencha seu nome, campo obrigatorio!');
            $('#nome').focus();



        } else {
            $('.nome').hide('slow');

        }
    })
    $('#nascimento').focusout(function() {
        if ($('#nascimento').val() == "") {
            $('.nascimento').empty();
            $('.nascimento').removeClass('text-info').addClass('text-danger');
            $('.nascimento').append('*Por favor preencha sua data de nascimento, campo obrigátorio');
            $('#nascimento').focus();


        } else {
            $('.nascimento').hide('slow');

        }
    });
    $('#cpf').focusout(function() {
        if ($('#cpf').val() == "") {
            $('.cpf').empty();
            $('.cpf').removeClass('text-info').addClass('text-danger');
            $('.cpf').append('*Por favor preencha seu CPF, campo obrigátorio');
            $('#cpf').focus();


        } else {
            $('.cpf').hide('slow');

        }
    });
    $('#atuacao').focusout(function() {
        if ($('#atuacao').val() == "") {
            $('.atuacao').empty();
            $('.atuacao').removeClass('text-info').addClass('text-danger');
            $('.atuacao').append('*Por favor selecione sua área de atuação, campo obrigátorio');
            $('#atuacao').focus();


        } else {
            $('.atuacao').hide('slow');

        }
    });
    $('#estados').focusout(function() {
        if ($('#estados').val() == "") {
            $('.estados').empty();
            $('.estados').removeClass('text-info').addClass('text-danger');
            $('.estados').append('*Por favor selecione seu estado, campo obrigátorio');
            $('#estados').focus();


        } else {
            $('.estados').hide('slow');

        }
    });
    $('#cidades').focusout(function() {
        if ($('#cidades').val() == "") {
            $('.cidades').empty();
            $('.cidades').removeClass('text-info').addClass('text-danger');
            $('.cidades').append('*Por favor selecione sua cidade, campo obrigátorio');
            $('#cidades').focus();


        } else {
            $('.cidades').hide('slow');

        }
    });
    $('#telefone').focusout(function() {
        if ($('#telefone').val() == "") {
            $('.telefone').empty();
            $('.telefone').removeClass('text-info').addClass('text-danger');
            $('.telefone').append('*Por favor preencha seu WhatsApp, campo obrigátorio');
            $('#telefone').focus();


        } else {
            $('.telefone').hide('slow');

        }
    });
    $('#email').focusout(function() {
        if ($('#email').val() == "") {
            $('.email').empty();
            $('.email').removeClass('text-info').addClass('text-danger');
            $('.email').append('*Por favor preencha seu e-mail, campo obrigátorio');
            $('#email').focus();


        } else {
            $('.email').hide('slow');

        }
    });
    $('#senha').focusout(function() {
        if ($('#senha').val() == "") {
            $('.senha').empty();
            $('.senha').removeClass('text-info').addClass('text-danger');
            $('.senha').append('*Por favor preencha sua senha, campo obrigátorio');
            $('#senha').focus();


        } else {
            $('.senha').hide('slow');

        }
    });
    $('#termos').focusout(function() {
        if ($('#termos').val() == "") {
            $('.termos').empty();
            $('.termos').removeClass('text-info').addClass('text-danger');
            $('.termos').append('*Você deve aceitar os termos antes de continuar');
            $('#termos').focus();


        } else {
            $('.termos').hide('slow');

        }
    });
    $('#endereco').focusout(function() {
        if ($('#endereco').val() == "") {
            $('.endereco').empty();
            $('.endereco').removeClass('text-info').addClass('text-danger');
            $('.endereco').append('*Por favor preencha seu endereço, campo obrigatório!');
            $('#endereco').focus();


        } else {
            $('.endereco').hide('slow');

        }
    });
    $('#numero').focusout(function() {
        if ($('#numero').val() == "") {
            $('.numero').empty();
            $('.numero').removeClass('text-info').addClass('text-danger');
            $('.numero').append('*Por favor preencha seu número, campo obrigatório!');
            $('#numero').focus();


        } else {
            $('.numero').hide('slow');

        }
    });
    $('#bairro').focusout(function() {
        if ($('#bairro').val() == "") {
            $('.bairro').empty();
            $('.bairro').removeClass('text-info').addClass('text-danger');
            $('.bairro').append('*Por favor preencha seu bairro, campo obrigatório!');
            $('#bairro').focus();


        } else {
            $('.bairro').hide('slow');

        }
    });
    $('#cep').focusout(function() {
        if ($('#cep').val() == "") {
            $('.cep').empty();
            $('.cep').removeClass('text-info').addClass('text-danger');
            $('.cep').append('*Por favor preencha seu CEP, campo obrigatório!');
            $('#cep').focus();


        } else {
            $('.cep').hide('slow');

        }
    });
});