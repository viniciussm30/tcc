<?php

include ('../../conexao.php');

$query = mysqli_query($conecta, "SELECT *, cliente.whatsapp, cliente.cidadeEndereco FROM trabalhospublicados JOIN cliente ON trabalhospublicados.idCliente = cliente.id");
// $querys = mysqli_query($conecta, "SELECT whatsapp FROM cliente");

while($resultado = mysqli_fetch_assoc($query)){
    $result[] = array_map('utf8_encode', $resultado);
}

echo json_encode($result);
