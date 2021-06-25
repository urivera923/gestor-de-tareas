
$(document).ready(() => {
  $('#boton_agregar').hide();
  $('#vista_tareas').hide();
  $('#boton_lista_tareas').click(() => {
    $('#vista_jumbotron').hide();
    $('#boton_agregar').show();
    $('#vista_tareas').show();
  });
  $('#boton_agregar').click(() => {
    // console.log('Ya funciona');
    Swal.fire({
      // icon: 'success',
      // title: 'Este es un ejemplo',
      // text: 'Es un simple ejemplo, para ver como funciona.'
      title: 'Agregar tarea',
      html:
        '<h5 class="text-white">Agregar tarea</h5>' + 
        '<form>' +
          '<div class="form-group text-left">' +
            '<label for="materia" class="text-white">Materia:</label>' +
            '<input type="text" class="form-control form-control-sm rounded-pill" id="materia" placeholder="Ingresar materia">' +
          '</div>' +
          '<div class="form-group mt-4">' +
            '<label for="tarea" class="text-white">Tarea:</label>' +
            '<textarea class="form-control" id="tarea">Ingresa tarea</textarea>' +
          '</div>' +
        '</form>',
        background: '#202020',
        showCancelButton: 'true' 
    }).then((resultado) => {
      if(resultado.isConfirmed){
        let materia = $('materia').val();
        let tarea = $('tarea').val();
        console.log(materia);
        console.log(tarea);
      }
    });
  });
  $('#boton_salir').click(() => {
    Swal.fire({
      title: 'warming',
      title: '¿Estas seguro?',
      text: 'Estas apunto de cerrar sesión',
      showCancelButton: true,
      background: '#202020'
    }).then((resultado) => {
      if(resultado.isConfirmed) {
        console.log('Sesión cerrada');
      }
    });
  });
  $('#boton_eliminar_tarea').click(() => {
    Swal.fire({
      title: 'warming',
      title: '¿Estas seguro?',
      text: 'Estas apunto de eliminar tarea',
      showCancelButton: true,
      background: '#202020'
    }).then((resultado) => {
      if(resultado.isConfirmed) {
        console.log('Tarea eliminada');
      }
    });
  });
  $('#boton_modificar_materia').click(() => {
    Swal.fire({
      icon: 'warning',
      // title: 'Este es un ejemplo',
      // text: 'Es un simple ejemplo, para ver como funciona.'
      title: 'Modificar tarea',
      html:
        '<h5 class="text-white">Modificar tarea</h5>' + 
        '<form>' +
          '<div class="form-group text-left">' +
            '<label for="materia" class="text-white">Materia:</label>' +
            '<input type="text" class="form-control form-control-sm rounded-pill" id="materia" placeholder="Ingresar materia">' +
          '</div>' +
          '<div class="form-group mt-4">' +
            '<label for="tarea" class="text-white">Tarea:</label>' +
            '<textarea class="form-control" id="tarea">Ingresa tarea</textarea>' +
          '</div>' +
        '</form>',
        background: '#202020',
        showCancelButton: 'true' 
    }).then((resultado) => {
      if(resultado.isConfirmed){
        let materia = $('materia').val();
        let tarea = $('tarea').val();
        console.log(materia);
        console.log(tarea);
      }
    });
  });
});
