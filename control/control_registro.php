<?php
  $datos = array (
    "nombre"  => $_POST['nombres'],
    "paterno" => $_POST['apellido_paterno'],
    "materno" => $_POST['apellido_materno'],
    "sexo" => $_POST['sexo'],
    "nacimiento" => $_POST['nacimiento'],
    "email" => $_POST['email'],
    "contrasenia" => sha1($_POST['contrasenia']),
  );

  require_once 'control_usuarios.php';
  $usuario = new Usuario();
?>