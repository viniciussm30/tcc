<?php

include ('../../conexao.php');
session_start();


$select = "SELECT usuario.email, trabalhador.id FROM usuario JOIN trabalhador ON usuario.idTrabalhador = trabalhador.id WHERE usuario.id = ".$_SESSION['id'];

$resultado = mysqli_query($conecta, $select);
$result = mysqli_fetch_array($resultado);

$querys = mysqli_query($conecta, "SELECT * FROM trabalhospublicados WHERE trabalhospublicados.idTrabalhador =" .$result['id']);
while($resultados = mysqli_fetch_assoc($querys)){
    $results[] = array_map('utf8_encode', $resultados);
}

echo json_encode($results);