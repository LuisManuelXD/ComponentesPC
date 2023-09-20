<?php
include "conexion.php";

$email = $_POST['email'];
$password = $_POST['password'];

$em = "select email, password FROM user WHERE 
    email = '".$email."' AND password = '".$password."' ";
$query = mysqli_query($conexion, $em);

$userExists = mysqli_num_rows($query);


if($userExists == 1){
    $json = array(
        'status' => 'success',
        'code' => 200,
        'message' => 'Inicio de sesión exitoso.',
        'user' => array(
            'email' => $email,
            'admin' => false
        )
    );
} else {
    $json = array(
        'status' => 'error',
        'code' => 404,
        'message' => 'Usuario o contrasena incorrecta.',
        'user' => array(
            'email' => $email,
            'admin' => false
        )
    );
}

$jsonString = json_encode($json);
echo $jsonString;
 
?>