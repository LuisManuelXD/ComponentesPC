<?php
include "conexion.php";
include "Entity/User.php";

$postUser = $_POST;

$firstName = $postUser['fistName'];
$lastName = $postUser['lastName'];
$numberPhone = $postUser['numberPhone'];
$email = $postUser['email'];
$password = $postUser['password'];

$user = new User();
$user->setFirstName($firstName);
$user->setLastName($lastName);
$user->setNumberPhone($numberPhone);
$user->setEmail($email);
$user->setPassword($password);


?>