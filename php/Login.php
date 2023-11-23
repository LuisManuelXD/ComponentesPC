<?php
include "conexion.php";

$email = $_POST['email'];
$password = $_POST['password'];

$em = "select email, password, admin FROM user WHERE 
    email = '".$email."' AND password = '".$password."' ";
$query = mysqli_query($conexion, $em);

$userExists = mysqli_num_rows($query);

$json = array();

if($userExists == 1) {
    while ($row = mysqli_fetch_array($query)) {
        $json[] = array(
            'status' => 'success',
            'code' => 200,
            'message' => 'Inicio de sesión exitoso.',
            'email' => $email,
            'admin' => $row['admin']
        );
    }
} else {
    $json[] = array(
        'status' => 'error',
        'code' => 404,
        'message' => 'Usuario o contrasena incorrecta.'
    );
}

$jsonString = json_encode($json);
echo $jsonString;
 
?>