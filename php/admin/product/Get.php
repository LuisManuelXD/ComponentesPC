<?php
include "../../conexion.php";

$id = $_POST['id'];

$em = "select *from product where id='$id';";
$query = mysqli_query($conexion, $em);

if(!$query)
    die ("Fallo la conexion." . mysqli_error($conexion));

$json = array();
while ($row = mysqli_fetch_array($query)) {
    $json[] = array(
        'id' => $row['id'],
        'name' => $row['name'],
        'price' => $row['price'],
        'available' => $row['available'],
        'description' => $row['description']
    );
}
    
$jsonString = json_encode($json);
echo $jsonString;
?>