<?php
include "../../conexion.php";

$name = $_POST['name'];
$description = $_POST['description'];
$price = $_POST['price'];
$available = $_POST['available'];
$image_id = $_POST['image_id'];

$em = "INSERT INTO product (name, price, available, description, image_id)
VALUES ('$name', '$price', '$available', '$description', '$image_id')";
$query = mysqli_query($conexion, $em);

if($query)
    echo "Producto agregado";
else
    echo "Error" .$query ."<br>" .mysqli_error($conexion);
?>
