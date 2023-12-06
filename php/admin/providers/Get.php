<?php
include "../../conexion.php";

$id = $_POST['id'];

$em = "SELECT *FROM provider WHERE id = '$id'";
$query = mysqli_query($conexion, $em);

if(!$query)
    die ("Fallo la conexion." . mysqli_error($conexion));

$json = array();
while ($row = mysqli_fetch_array($query)) {
    $json[] = array(
        'id' => $row['id'],
        'name' => $row['name'],
        'zipCode' => $row['zipCode'],
        'address' => $row['address'],
        'email' => $row['email'],
        'description' => $row['description'],
        'dateCreation' => $row['dateCreation'],
        'dateModification' => $row['dateModification']
    );
}
    
$jsonString = json_encode($json);
echo $jsonString;
?>