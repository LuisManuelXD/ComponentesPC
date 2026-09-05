<?php
include "../conexion.php";

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$password = $_POST['password'];
$dateCreation = date("Y-m-d");
$dateModification = date("Y-m-d");

$em = "INSERT INTO user
    (firstName, lastName, email, password, dateCreation, dateModification, admin) 
    VALUES ('$firstName', '$lastName', '$email', '$password', '$dateCreation', '$dateModification', 0);";
$query = mysqli_query($conexion, $em);

if($query)
    echo "Usuario agregado";
else
    echo "Error" .$query ."<br>" .mysqli_error($conexion);
?>