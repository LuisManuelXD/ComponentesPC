<?php
include "../../conexion.php";

$id = $_POST['id'];
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$userName = $_POST['userName'];
$password = $_POST['password'];
$dateModification = date("Y-m-d");
$admin = true;

$em = "UPDATE user SET firstName='$firstName', lastName='$lastName', email='$email',
    userName='$userName', password='$password', dateModification='$dateModification',
    admin='$admin'
    WHERE id='$id';";
$query = mysqli_query($conexion, $em);

if ($query)
    echo "Usuario modificado";
else
    echo "Error" . $query . "<br>" . mysqli_error($conexion);
