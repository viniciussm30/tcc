<?php
    include('../../conexao.php');
    session_start();
    
    $nome = $_POST['nomeTrabalhador'];
        // echo $nome;
        $apelido = $_POST['apelidoTrabalhador'];
        // echo $apelido;
        $dataNascimento = $_POST['dataNasciementoTrabalhador'];
        // echo $dataNascimento;
        $cpf = $_POST['cpfTrabalhador'];
        // echo $cpf;
        $atuacao = $_POST['atuacaoTrabalhador'];
        // echo $atuacao;
        $cidade = $_POST['cidadeTrabalhador'];
        // echo $cidade;
        $estado = $_POST['estadoTrabalhador'];
        // echo $cidade;
        $telefone = $_POST['telefoneTrabalhador'];
        // echo $telefone;
        $email = $_POST['emailTrabalhador'];
        // echo $email;
        $senha = $_POST['senhaTrabalhador'];
        // echo $senha;

        $nome = utf8_decode($nome);
        $apelido = utf8_decode($apelido);
        $atuacao = utf8_decode($atuacao);
        $cidade = utf8_decode($cidade);
        $email = utf8_decode($email);
        $senha = utf8_decode($senha);
        $estado = utf8_decode($estado);

        $senhaMD5 = md5($senha);
        

        if($nome != "" && $dataNascimento != "" && $cpf != "" && $atuacao != "" && $cidade != "" && $estado != "" && $telefone != "" && $email != "" && $senha != ""){
            $sql = "INSERT INTO trabalhador (nomeCompleto, apelido, dataNascimento, cpf, atuacao, cidade, estado, whatsapp) 
            VALUES ('".$nome."', '".$apelido."', '".$dataNascimento."', '".$cpf."', '".$atuacao."', '".$cidade."', '".$estado."', '".$telefone."')";

            $sqlDois = "INSERT INTO usuario (email, senha, idTrabalhador) VALUES ('".$email."', '".$senhaMD5."', LAST_INSERT_ID())";

            if(mysqli_query($conecta, $sql) & mysqli_query($conecta, $sqlDois)){
                $data = array("return" => true);
            }else{
                $data = array("return" => mysqli_error($conecta));
            }
        }else{
            $data = array("return" => "Preencha os campos obrigatórios*");
        }
        



    



    
    echo json_encode($data);
    
?>


