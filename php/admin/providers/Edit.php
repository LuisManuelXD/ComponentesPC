<?php
include "../../conexion.php";

$id = $_POST['id'];
$name = $_POST['name'];
$zipCode = $_POST['zipCode'];
$address = $_POST['address'];
$email = $_POST['email'];
$description = $_POST['description'];
$dateModification = date("Y-m-d");
$admin = true;

$em = "UPDATE provider SET name='$name', zipCode='$zipCode', address='$address',
    email='$email', description='$description', dateModification='$dateModification'
    WHERE id='$id';";
$query = mysqli_query($conexion, $em);

if ($query)
    echo "Provedor modificado";
else
    echo "Error" . $query . "<br>" . mysqli_error($conexion);
