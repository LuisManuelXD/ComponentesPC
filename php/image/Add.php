<?php
include "../conexion.php";

if (isset($_FILES['image'])) {
    $errors = array();
    $file_name = $_FILES['image']['name'];
    $file_size = $_FILES['image']['size'];
    $file_tmp = $_FILES['image']['tmp_name'];
    $file_type = $_FILES['image']['type'];
    $file_parts = explode('.', $_FILES['image']['name']);
    $file_ext = strtolower(end($file_parts));

    $extensions = array("jpeg", "jpg", "png");

    if (in_array($file_ext, $extensions) === false) {
        $errors[] = "extension not allowed, please choose a JPEG or PNG file.";
    }

    if (empty($errors) == true) {
        move_uploaded_file($file_tmp, "../../images/" . $file_name);
    } else {
        print_r($errors);
    }
}

$sql = "INSERT INTO image (image)
  VALUES ('/images/$file_name')";

if ($conexion->query($sql) === TRUE) {
    echo json_encode(['id' => $conexion->insert_id]);
} else {
    echo "Error: " . $sql . "<br>" . $conexion->error;
}

$conexion->close();
?>