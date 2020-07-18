<?php
include('../../conexao.php');
session_start();
if(!isset($_SESSION['id']) || $_SESSION['id'] == ''){
    $data = ["ruturn" => "Usuário não logado"];
    echo json_encode($data);
    exit;
}

$select = "SELECT usuario.email, trabalhador.id FROM usuario JOIN trabalhador ON usuario.idTrabalhador = trabalhador.id WHERE usuario.id =".$_SESSION['id'];

$resultadoSelect = mysqli_query($conecta, $select);
$result = mysqli_fetch_array($resultadoSelect);

$selectPerfil = mysqli_query($conecta, "SELECT *, DATE_FORMAT (dataNascimento, '%d/%m/%Y') AS dataNascimento FROM trabalhador WHERE trabalhador.id =". $result['id']);
while($resultados = mysqli_fetch_assoc($selectPerfil)){
    $results[] = array_map('utf8_encode', $resultados);
}

echo json_encode($results);