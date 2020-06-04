<?php

    include('conexao.php');

    $nome = $_POST['nomeTrabalhador'];
    $apelido = $_POST['apelidoTrabalhador'];
    $dataNascimento = $_POST['dataNasciementoTrabalhador'];
    $cpf = $_POST['cpfTrabalhador'];
    $atuacao = $_POST['atuacaoTrabalhador'];
    $cidade = $_POST['cidadeTrabalhador'];
    $estado = $_POST['estadoTrabalhador'];
    $telefone = $_POST['telefoneTrabalhador'];
    $email = $_POST['emailTrabalhador'];
    $senha = $_POST['senhaTrabalhador'];

    $sql = "INSERT INTO trabalhador (nomeCompleto, apelido, dataNascimento, cpf, atuacao, cidade, estado, whatsapp, email, senha) VALUES ($nome, $apelido, $dataNascimento, $cpf, $atuacao, $cidade, $estado, $telefone, $email, $senha)";

    if (mysqli_query($conexao, $sql)){
        $data = array('return' => true);
    } else{
        $data = array('return' => 'Erro:' .mysqli_error($conexao));
    }

    echo json_encode($data)

?>
