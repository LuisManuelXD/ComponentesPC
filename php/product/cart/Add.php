<?php
include "../../conexion.php";

$items = $_POST['items'];
$product_id = $_POST['product_id'];
$user_id = $_POST['user_id'];

// Valida si hay suficiente existencia
$result = mysqli_query($conexion, "SELECT available FROM product WHERE id = $product_id");
$row = mysqli_fetch_assoc($result);
$available = $row['available'];

if ($items > $available) {
    echo "La cantidad solicitada excede la cantidad disponible.";
    return;
}

// Inserta en el carrito el item seleccionado
$em = "insert into cart (items, product_id, user_id) 
    values ('$items', '$product_id', '$user_id');";
$query = mysqli_query($conexion, $em);

if($query) {
    // Resta la cantidad solicitada por la cantidad disponible
    // $update = "UPDATE product SET available = available - $items WHERE id = $product_id";
    // $updateQuery = mysqli_query($conexion, $update);

    // if(!$updateQuery) {
    //     echo "Error al actualizar la cantidad disponible: " . mysqli_error($conexion);
    // }
    echo "Producto agregado al carrito";
}
else
    echo "Error" .$query ."<br>" .mysqli_error($conexion);
?>