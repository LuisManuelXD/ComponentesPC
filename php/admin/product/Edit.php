<?php
include "../../conexion.php";

$id = $_POST['id'];
$name = $_POST['name'];
$description = $_POST['description'];
$price = $_POST['price'];
$available = $_POST['available'];
$image_id = $_POST['image_id'];

$em = "UPDATE product SET name='$name', description='$description', price='$price',
    available='$available', image_id='$image_id'
    WHERE product.id='$id';";
$query = mysqli_query($conexion, $em);

if ($query)
    echo "Producto agregado";
else
    echo "Error" . $query . "<br>" . mysqli_error($conexion);
