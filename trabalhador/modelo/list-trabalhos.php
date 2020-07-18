<?php

include ('../../conexao.php');
session_start();
if(!isset($_SESSION['id']) || $_SESSION['id'] == ''){
    $data = ["ruturn" => "Usuário não logado"];
    echo json_encode($data);
    exit;
}

$query = mysqli_query($conecta, "SELECT trabalhospublicados.*, DATE_FORMAT (prazo, '%d/%m/%Y') AS prazo, cliente.whatsapp, cliente.cidadeEndereco, cliente.estadoEndereco FROM trabalhospublicados JOIN cliente ON trabalhospublicados.idCliente = cliente.id WHERE statusTrabalho = 'Pendente'");
// $querys = mysqli_query($conecta, "SELECT whatsapp FROM cliente");

while($resultado = mysqli_fetch_assoc($query)){
    $result[] = array_map('utf8_encode', $resultado);
}

echo json_encode($result);
