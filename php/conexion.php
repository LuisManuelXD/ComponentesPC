<?php
$serverName = "localhost";
$username = "root";
$password = "";
$dataBase = "componentespc";

$conexion = mysqli_connect($serverName, $username, $password, $dataBase);

if(!$conexion) {
    die("Fallo la conexion " . mysqli_connect_error());
} else {
    echo "Conexion Exitosa";
}

?>