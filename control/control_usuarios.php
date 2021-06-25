<?php
  class usuario {
    // Declaración de una propiedad
    private object $conexion;
    private string $host = 'localhost';
    private string $user = 'root';
    private string $db = 'gestor_tareas';
    private string $password = '';


    // Declaración de un método
    public function _construct() {
      $this->conexion = new PDO("mysql:host=$this->host;dbname=$this->db", $this->user, $this->password);
    }

    public function insertar(array $datos) {
      $query = 'INSERT INTO tareas(nombre, paterno, materno, sexo, nacimiento, email, contrasenia) VALUES (:nombre, :paterno, :materno, sexo, :nacimiento, :email, :contrasenia)';
      $stmt = $this->conexion->prepare($query);
      $stmt->bindParam(':nombre', $datos['nombre']);
      $stmt->bindParam(':paterno', $datos['paterno']);
      $stmt->bindParam(':materno', $datos['materno']);
      $stmt->bindParam(':sexo', $datos['sexo']);
      $stmt->bindParam(':nacimiento', $datos['nacimiento']);
      $stmt->bindParam(':email', $datos['email']);
      $stmt->bindParam(':contrasenia', $datos['contrasenia']);
      $stmt->execute();
      unset($this->conexion);
      return $stmt;
    }
  }
?>