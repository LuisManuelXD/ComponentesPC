<?php
include "../../conexion.php";

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
// $numberPhone = $_POST['numberPhone'];
$email = $_POST['email'];
$password = $_POST['password'];
$dateCreation = date("Y-m-d");
$dateModification = date("Y-m-d");
$admin = true;

$em = "insert into user (firstName, lastName, email, 
    password, dateCreation, dateModification, admin) values ('$firstName', '$lastName', 
    '$email', '$password', '$dateCreation', '$dateModification', '$admin');";
$query = mysqli_query($conexion, $em);

if($query)
    echo "Usuario agregado";
else
    echo "Error" .$query ."<br>" .mysqli_error($conexion);
?>