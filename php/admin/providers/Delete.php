<?php
include "../../conexion.php";

$id = $_POST['id'];

$em = "DELETE FROM provider WHERE id='$id';";
$query = mysqli_query($conexion, $em);

if(!$query)
    die ("Fallo la eliminacion." . mysqli_error($conexion));

echo 'Producto eliminado correctamente.';
?>