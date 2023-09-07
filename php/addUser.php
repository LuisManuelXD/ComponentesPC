<?php
include "conexion.php";

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$numberPhone = $_POST['numberPhone'];
$email = $_POST['email'];
$password = $_POST['password'];
// $dateCreation = $_POST['dateCreation'];
$dateCreation = date("d/m/Y");

$em = "insert into user (firstName, lastName, numberPhone, email, 
    password, dateCreation) values ('$firstName', '$lastName', 
    '$numberPhone', '$email', '$password', '$dateCreation')";
$query = mysqli_query($conexion, $em);

if($query)
    echo "Usuario agregado";
else
    echo "Error" .$query ."<br>" .mysqli_error($conexion);
?>