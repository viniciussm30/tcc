<?php

include ('../../conexao.php');

$query = mysqli_query($conecta, "SELECT * FROM trabalhador");
while($resultado = mysqli_fetch_assoc($query)){
    $result[] = array_map('utf8_encode', $resultado);
}

echo json_encode($result);