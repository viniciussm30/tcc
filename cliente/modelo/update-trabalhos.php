<?php

include('../../conexao.php');
session_start();

    $titulo = $_POST['titulo'];
    $prazo = $_POST['prazo'];
    $atuacao = $_POST['atuacao'];
    $descricao = $_POST['descricao'];
    $avaliacao = $_POST['avaliacao'];

    $titulo = utf8_decode($titulo);
    $atuacao = utf8_decode($atuacao);
    $descricao = utf8_decode($descricao);

    $sql = "UPDATE trabalhospublicados SET titulo = '".$titulo."', atuacao = '".$atuacao."', descricao = '".$descricao."', avaliacao = '".$avaliacao."'";
    


    if(mysqli_query($conecta, $sql)){
        $data = array("return" => true);
    }else{
        $data = array("return" => mysqli_error($conecta));
    }

    echo json_encode($data);