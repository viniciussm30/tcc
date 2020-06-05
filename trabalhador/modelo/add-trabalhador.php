<?php

    include('conexao.php');

    $nome = $_POST['nomeTrabalhador'];
    echo $nome;
    $apelido = $_POST['apelidoTrabalhador'];
    echo $apelido;
    $dataNascimento = $_POST['dataNasciementoTrabalhador'];
    echo $dataNascimento;
    $cpf = $_POST['cpfTrabalhador'];
    echo $cpf;
    $atuacao = $_POST['atuacaoTrabalhador'];
    echo $atuacao;
    $cidade = $_POST['cidadeTrabalhador'];
    echo $cidade;
    $estado = $_POST['estadoTrabalhador'];
    echo $cidade;
    $telefone = $_POST['telefoneTrabalhador'];
    echo $telefone;
    $email = $_POST['emailTrabalhador'];
    echo $email;
    $senha = $_POST['senhaTrabalhador'];
    echo $senha;

    $sql = "INSERT INTO trabalhador (nomeCompleto, apelido, dataNascimento, cpf, atuacao, cidade, estado, whatsapp, email, senha) VALUES ($nome, $apelido, $dataNascimento, $cpf, $atuacao, $cidade, $estado, $telefone, $email, $senha)";

    if (mysqli_query($conexao, $sql)){
        $data = array('return' => true);
    } else{
        $data = array('return' => 'Erro:' .mysqli_error($conexao));
    }

    echo json_encode($data);

?>
