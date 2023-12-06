<?php
include "../../conexion.php";

$name = $_POST['name'];
$zipCode = $_POST['zipCode'];
$address = $_POST['address'];
$email = $_POST['email'];
$description = $_POST['description'];
$dateCreation = date("Y-m-d");
$dateModification = date("Y-m-d");

$em = "insert into provider (name, zipCode, address,
    email, description, dateCreation, dateModification) values ('$name', '$zipCode',
    '$address', '$email', '$description', '$dateCreation', '$dateModification');";
$query = mysqli_query($conexion, $em);

if($query)
    echo "Provedor agregado";
else
    echo "Error" .$query ."<br>" .mysqli_error($conexion);
?>