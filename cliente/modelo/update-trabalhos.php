<?php

include('../../conexao.php');
session_start();
if(!isset($_SESSION['id']) || $_SESSION['id'] == ''){
    $data = ["ruturn" => "Usuário não logado"];
    echo json_encode($data);
    exit;
}

    $titulo = $_POST['titulo'];
    $prazo = $_POST['prazo'];
    $atuacao = $_POST['atuacao'];
    $descricao = $_POST['descricao'];
    $avaliacao = $_POST['avaliacao'];
    $id = $_POST['id'];
    $trabalhador = $_POST['trabalhadoor'];
    $status = $_POST['statusTrabalho'];

    $titulo = utf8_decode($titulo);
    $atuacao = utf8_decode($atuacao);
    $descricao = utf8_decode($descricao);


    $sql = "UPDATE trabalhospublicados SET titulo = '".$titulo."', atuacao = '".$atuacao."', descricao = '".$descricao."', avaliacao = '".$avaliacao."', idTrabalhador = '$trabalhador', situacao = '".$status."' WHERE id = $id";

    if($titulo != "" && $atuacao != "" && $descricao != ""){

        if(mysqli_query($conecta, $sql)){
            $data = array("return" => true);
        }else{
            $data = array("return" => mysqli_error($conecta));
        }
    }else{
        $data = array("return" => "Preencha os campos obrigatórios*");
    }

    echo json_encode($data);