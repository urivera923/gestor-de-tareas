<?php
  $usuario = 'root';
  $contrasenia = '';
  $mbd = new PDO('mysql:host=localhost;dbname=gestor-tareas', $usuario, $contrasenia);
  if (isset($mbd)) {

    echo 'Conectado con exito';

  } else {

    echo 'Error en la conexión'; 

  }
?>