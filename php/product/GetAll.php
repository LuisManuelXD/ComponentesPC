<?php
include "../conexion.php";

$em = "SELECT product.*, image.image FROM product JOIN image ON product.image_id = image.id ORDER BY available DESC;";
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
        'description' => $row['description'],
        'image_id' => $row['image_id'],
        'image' => $row['image']
    );
}
    
$jsonString = json_encode($json);
echo $jsonString;
?>