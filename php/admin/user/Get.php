<?php
include "../../conexion.php";

$id = $_POST['id'];

$em = "select *from user where id = '$id'";
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
        'admin' => $row['admin'],
        'userName' => $row['userName'],
        'password' => $row['admin']
    );
}
    
$jsonString = json_encode($json);
echo $jsonString;
?>