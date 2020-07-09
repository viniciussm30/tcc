<?php

include ('../../conexao.php');
session_start();


$select = "SELECT usuario.email, cliente.id FROM usuario JOIN cliente ON usuario.idCliente = cliente.id WHERE usuario.id = ".$_SESSION['id'];

$resultado = mysqli_query($conecta, $select);
$result = mysqli_fetch_array($resultado);

$querys = mysqli_query($conecta, "SELECT * FROM trabalhospublicados WHERE trabalhospublicados.idCliente =" .$result['id']);
while($resultados = mysqli_fetch_assoc($querys)){
    $results[] = array_map('utf8_encode', $resultados);
}

echo json_encode($results);