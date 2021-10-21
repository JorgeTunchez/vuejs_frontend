<template>
  <div class="hello">
    <h1>Listado de Clientes</h1>
  </div>
  <div class="container">
    <div class="card">
      <div class="card-header"></div>
      <div class="card-body">
        <table class="table table-hover" id="tblListar">
          <thead style="background-color: #2ecc71; color: white">
            <tr>
              <th>No.</th>
              <th>Nombre Completo</th>
              <th>Correo Electronico</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cliente, index) in clientes" :key="cliente.id">
              <td>
                <b>{{ index + 1 }}</b>
              </td>
              <td>{{ cliente.nombre }}</td>
              <td>{{ cliente.correo }}</td>
              <td>
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <router-link
                      :to="{ name: 'Actualizar', params: { id: cliente.id } }"
                    >
                      <button class="btn btn-info" title="Editar">
                        <i class="fas fa-edit"></i>
                      </button>
                    </router-link>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <button
                      class="btn btn-danger"
                      title="Eliminar"
                      v-on:click="eliminarCliente(cliente.id)"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clientes: [],
    };
  },
  created() {
    this.consultarClientes();
  },
  methods: {
    consultarClientes() {
      fetch("http://localhost/vuejs_backend/")
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          this.clientes = [];
          if (typeof datosRespuesta[0].success === "undefined") {
            this.clientes = datosRespuesta;
          }
        })
        .catch(console.log());
    },
    eliminarCliente(idCliente) {
      fetch(`http://localhost/vuejs_backend/?borrar=${idCliente}`)
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          if (datosRespuesta.success === 1) {
            window.location.href = "listar";
          }
        })
        .catch(console.log());
    },
  },
};
</script>

