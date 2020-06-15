<?php
    include('../../conexao.php');
    session_start();

    $titulo = $_POST['titulo'];
    $prazo = $_POST['prazo'];
    $atuacao = $_POST['atuacao'];
    $descricao = $_POST['descricao'];

    $titulo = utf8_decode($titulo);
    $atuacao = utf8_decode($atuacao);
    $descricao = utf8_decode($descricao);

    $sql = "INSERT INTO trabalhospublicados (titulo, prazo, atuacao, descricao) VALUES ('".$titulo."', '".$prazo."', '".$atuacao."', '".$descricao."')";

    if(mysqli_query($conecta, $sql)){
        $data = array("return" => true);
    }else{
        $data = array("return" => mysqli_error($conecta));
    }

    echo json_encode($data);
