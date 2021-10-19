<template>
  <div class="hello">
    <h1>Listado de Clientes</h1>
  </div>
  <div class="container">
    <div class="card">
      <div class="card-header"></div>
      <div class="card-body">
        <table class="table table-hover" id="tblListar">
          <thead style="background-color: #2ecc71; color: white;">
            <tr>
              <th>No.</th>
              <th>Nombre Completo</th>
              <th>Correo Electronico</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1</b></td>
              <td>Jorge Tunchez</td>
              <td>jorge.tunchez@gmail.com</td>
              <td>
                <button class="btn btn-info" title="Editar">
                  <i class="fas fa-edit"></i>
                </button>&nbsp;&nbsp;
                <button class="btn btn-danger" title="Eliminar">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td><b>2</b></td>
              <td>Paola Morales</td>
              <td>paola.morales@gmail.com</td>
              <td>
                <button class="btn btn-info" title="Editar">
                  <i class="fas fa-edit"></i>
                </button>&nbsp;&nbsp;
                <button class="btn btn-danger" title="Eliminar">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer"></div>
    </div>
  </div>
</template>
