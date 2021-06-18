<?php
  require_once 'app/config.php';
?>

<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php
      require_once 'app/dependencias.php';
    ?>
  </head>
  <body>

   <?php
      if(isset($_GET['vista_solicitada'])){
        switch ($_GET['vista_solicitada']) {
          case 'home':
            echo 'Bienvenido a casa';
            break;
          
          default:
            echo 'Error 404';
            break;
        }
      
      } else {
        echo 'Estas en el Index';
      }
   ?>
  </body>
</html>