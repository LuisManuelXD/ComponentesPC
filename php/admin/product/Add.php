<?php
include "../../conexion.php";

$name = $_POST['name'];
$description = $_POST['description'];
$price = $_POST['price'];
$available = $_POST['available'];
// $image = $_POST['image'];

$em = "insert into product (name, description, price, available) 
    values ('$name', '$description', '$price', '$available');";
$query = mysqli_query($conexion, $em);

if($query)
    echo "Producto agregado";
else
    echo "Error" .$query ."<br>" .mysqli_error($conexion);
?>