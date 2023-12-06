<?php
include "../../conexion.php";

$user_id = $_POST['user_id'];

$em = "SELECT cart.id, cart.items, product.name, product.price, user.id
    FROM cart 
    JOIN user ON cart.user_id = user.id 
    JOIN product ON cart.product_id = product.id 
    WHERE user.id = $user_id;";
$query = mysqli_query($conexion, $em);

if(!$query)
    die ("Fallo la conexion." . mysqli_error($conexion));

$json = array();
while ($row = mysqli_fetch_array($query)) {
    $total = $row[1] * $row[3];
    $json[] = array(
        'id' => $row[0],
        'items' => $row[1],
        'product_name' => $row[2],
        'product_price' => $row[3],
        'total' => $total,
        'user_id' => $row[4]
    );
}
    
$jsonString = json_encode($json);
echo $jsonString;
?>
