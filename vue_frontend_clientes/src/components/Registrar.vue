<template>
  <div class="hello">
    <h1>Registro de Clientes</h1>
  </div>
  <div class="container">
    <div class="card">
      <div class="card-header"></div>
      <div class="card-body">
        <form>
          <div class="form-group mt-4">
            <label for="nombre">Nombre Completo</label>
            <input type="text" class="form-control" id="nombre" placeholder="Ingresar Nombre"/>
          </div>
          <div class="form-group mt-4">
            <label for="email">Correo Electronico</label>
            <input type="email" class="form-control" id="email" placeholder="Ingresar Correo Electronico"/>
          </div>
          <div class="form-group mt-4">
            <button type="submit" class="btn btn-primary btn-block">Registrar CLiente</button>
          </div>
        </form>
      </div>
      <div class="card-footer"></div>
    </div>
  </div>
</template>
