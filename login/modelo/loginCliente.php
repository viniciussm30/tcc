<?php
    include('../../conexao.php');
    
    $loginUsuario = $_POST['emailLogin'];
    $senhaUsuario = $_POST['senhaLogin'];
    
    $sql = "SELECT *, count(id) as registro FROM usuario WHERE email = '".$loginUsuario."' AND senha = '".$senhaUsuario."' AND idCliente != 0 ";
    
    if($resultado = mysqli_query($conecta, $sql)){
    
        while($result = mysqli_fetch_array($resultado)){
            if($result['registro'] == 1){
                session_start();
                $_SESSION['id'] = $result['id'];
                $data = array("return" => true);
            }
            else{
                $data = array("return" => "Usuário e/ou senha não validado!");
            }
        }
    }
    
    echo json_encode($data);
?>