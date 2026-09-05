<?php
$env = parse_ini_file(__DIR__ . '/../.env');

$serverName = $env['DB_SERVER_NAME'];
$username = $env['DB_USER'];
$password = $env['DB_PASS'];
$dataBase = $env['DB_DATABASE'];

$conexion = mysqli_connect($serverName, $username, $password, $dataBase);

// if(!$conexion) {
//     die("Fallo la conexion " . mysqli_connect_error());
// } else {
//     echo "Conexion Exitosa";
// }
?>