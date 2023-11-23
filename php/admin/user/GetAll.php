<?php
include "../../conexion.php";

$em = "select *from user where admin = 1";
$query = mysqli_query($conexion, $em);

if(!$query)
    die ("Fallo la conexion." . mysqli_error($conexion));

$json = array();
while ($row = mysqli_fetch_array($query)) {
    $json[] = array(
        'id' => $row['id'],
        'firstName' => $row['firstName'],
        'lastName' => $row['lastName'],
        'email' => $row['email'],
        'userName' => $row['userName'],
        'admin' => $row['admin']
    );
}
    
$jsonString = json_encode($json);
echo $jsonString;
?>