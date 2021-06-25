<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-8">

      <form class="shadow p-4">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h5>Registro</h5>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-md-6">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="nombres">Nombre(s)</label>
                      <input type="text" class="form-control form-control-sm rounded-pill" id="" name="nombres" placeholder="Ingresar Nombre(s)">
                    </div>
                  </div>
                </div>
                
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="apellido_paterno">Apellido Paterno</label>
                      <input type="text" class="form-control form-control-sm rounded-pill" id="apellido_paterno" name="Ingresar Apellido Paterno" placeholder="">
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="apellido_materno">Apellido Materno</label>
                      <input type="text" class="form-control form-control-sm rounded-pill" id="apellido_materno" name="Ingresar Apellido Materno" placeholder="">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <div class="from-group">
                      <label for="sexo">Sexo</label>
                      <input type="text" class="from-control  from-control-sm rounded-pill" id="sexo" name="sexo" placeholder="Ingresa tu Sexo">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="from-group">
                      <label for="fecha_nacimiento">Fecha de Nacimiento</label>
                      <input type="date" class="from-control  from-control-sm rounded-pill" id="fecha_nacimiento" name="fecha_nacimiento" placeholder="">
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="email"></label>
                      <input type="text" class="form-control-sm rounded-pill" id="email" name="email" placeholder="Ingresa Email">
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="contrasenia">Contraseña</label>
                      <input type="password" class="form-control form-control-sm rounded-pill" id="contrasenia" name="contrasenia" placeholder="Ingresa Contraseña">                   
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="confirmar_contrasenia">Confirmar Contraseña</label>
                      <input type="password" class="form-control form-control-sm rounded-pill" id="confirmar_contrasenia" name="confirmar_contrasenia" placeholder="Confrimar Contraseña">                   
                    </div>
                  </div>
                </div> 
              </div>

              <div class="row mt-3">
                <div class="col-md-12">
                  <span class="btn btn-info rounded-pill btn-sm" id="boton_registrar">Registrar</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </form>
      
    </div>
  </div>
</div>

<script src="manager/manager_registro.js"></script>