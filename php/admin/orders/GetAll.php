<?php
include "../../conexion.php";

$em = "SELECT orders.id, orders.paymentStatus, orders.orderStatus,
    orders.items, product.name, user.email
    from orders
    JOIN user ON orders.user_id = user.id
    JOIN product ON orders.product_id = product.id";
$query = mysqli_query($conexion, $em);

if(!$query)
    die ("Fallo la conexion." . mysqli_error($conexion));

$json = array();
while ($row = mysqli_fetch_array($query)) {
    $json[] = array(
        'id' => $row[0],
        'user_email' => $row[5],
        'paymentStatus' => $row[1],
        'orderStatus' => $row[2],
        'product_name' => $row[4],
        'items' => $row[3]
    );
}
    
$jsonString = json_encode($json);
echo $jsonString;