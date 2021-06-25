
$(document).ready(() => {
  $('#boton_ingresar').click(() => {
    if ($('#usuario').val() == null && $('#usuario').val() == '') {
      Swal.fire({
        icon: 'error',
        title: 'Ups¡',
        text: 'El campo usuario esta vacío'
      });
    } else {
      if ($('#contrasenia').val() == null && $('#contrasenia').val() == '') {
        Swal.fire({
          icon: 'error',
          title: 'Ups¡',
          text: 'El campo Contraseña esta vacío'
        });
      } else {
        
      }
    }
    let usuario = $('#usuario').val();
    let contrasenia = $('#contrasenia').val();
    if (usuario == 'usuario@gmail.com' && contrasenia == '12345678') {
      alert('Hola bienvenido!');
      window.location.href = 'view/pagina_principal.php';
    } else {
      alert('Error!');
    }
  });
});
