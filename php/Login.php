<?php
include "conexion.php";

$email = $_POST['email'];
$password = $_POST['password'];

$em = "select email, password FROM user WHERE 
    email = '".$email."' AND password = '".$password."' ";
$query = mysqli_query($conexion, $em);

$userExists = mysqli_num_rows($query);

if($userExists == 1){
    echo true;
} else {
    echo false;
}
 
?>