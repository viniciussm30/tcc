<?php

include('../../conexao.php');
session_start();

$nome = $_POST['nomeCliente'];
$dataNascimento = $_POST['dataNascimentoCliente'];
$endereco = $_POST['enderecoCliente'];
$numero =  $_POST['numeroEnderecoCliente'];
$bairro = $_POST['bairroCliente'];
$complemento = $_POST['complementoCliente'];
$cep = $_POST['cepCliente'];
$cidade = $_POST['cidadeCliente'];
$estado = $_POST['estadoCliente'];
$telefone = $_POST['telefoneCliente'];
$email = $_POST['emailCliente'];
$senha = $_POST['$senhaCliente'];

$nome = utf8_decode($nome);
$endereco = utf8_decode($endereco);
$bairro = utf8_decode($bairro);
$complemento = utf8_decode($complemento);
$cidade = utf8_decode($cidade);
$email = utf8_decode($email);
// $senha = utf8_decode($senha);

$sql = "INSERT INTO cliente (nome, dataNascimento, endereco, numeroEndereco, bairroEndereco, complementoEndereco, cepEndereco, cidadeEndereco, estadoEndereco, email, whatsapp, senha) VALUES ('".$nome."', '".$dataNascimento."', '".$endereco."', '".$numero."', '".$bairro."', '".$complemento."', '".$cep."', '".$cidade."', '".$estado."', '".$email."', '".$telefone."', '".$senha."')";

if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
    $data = array("return" => mysqli_error($conecta));
}

echo json_encode($data);

