$(document).ready(() => {
  $('boton_registrar').click(() => {
    
    if($('#nombre').val() === ''){
      // console.log('Nombre vacío');
      Swal.fire({
        icon: 'error',
        title: 'Ups¡',
        text: 'Nombre vacío',
        background: '#202020'
      });
    } else {

      if($('#apellido_paterno').val() === '' && $('#apellido_paterno').val() === null){
        // console.log('Nombre vacío');
        Swal.fire({
          icon: 'error',
          title: 'Ups¡',
          text: 'Apellido Paterno no puede estar vacío',
          background: '#202020'
        });
      } else {

        if($('#apellido_materno').val() === '' && $('#apellido_materno').val() === null){
          // console.log('Nombre vacío');
          Swal.fire({
            icon: 'error',
            title: 'Ups¡',
            text: 'Apellido Materno no puede estar vacío',
            background: '#202020'
          });
        } else {
          if($('#sexo').val() === '' && $('#sexo').val() === null){
            // console.log('Nombre vacío');
            Swal.fire({
              icon: 'error',
              title: 'Ups¡',
              text: 'Error, debes de seleccionar un genero',
              background: '#202020'
            });
          } else {
            if($('#fecha_nacimiento').val() === '' && $('#fecha_nacimiento').val() === null){
              // console.log('Nombre vacío');
              Swal.fire({
                icon: 'error',
                title: 'Ups¡',
                text: 'El campo Fecha Nacimiento esta vacío',
                background: '#202020'
              });
            } else {
              if($('#email').val() === '' && $('#email').val() === null){
                // console.log('Nombre vacío');
                Swal.fire({
                  icon: 'error',
                  title: 'Ups¡',
                  text: 'El campo Email esta vacío',
                  background: '#202020'
                });
              } else {
                if($('#contrasenia').val() === '' && $('#contrasenia').val() === null){
                  // console.log('Nombre vacío');
                  Swal.fire({
                    icon: 'error',
                    title: 'Ups¡',
                    text: 'El campo Contraseña esta vacío',
                    background: '#202020'
                  });
                } else {
                  if($('#confirmar_contrasenia').val() === '' && $('confirmar_#contrasenia').val() === null){
                    // console.log('Nombre vacío');
                    Swal.fire({
                      icon: 'error',
                      title: 'Ups¡',
                      text: 'El campo Contraseña esta vacío',
                      background: '#202020'
                    });
                  } else {
                    if($('#contrasenia').val() === $('confirmar_#contrasenia').val()){
                      $.ajax({
                        url: '',
                        data: $('#registro').serialize(),
                        type: 'POST',
                        
                      });
                    } else {
                      console.log('Error, las contraseañs no cinciden');
                    
                    }
                  }
                }
              }
            }
  
          }

        }

      }

    }
  });
});