<template>
  <div class="hello">
    <h1>Registro de Clientes</h1>
  </div>
  <div class="container">
    <div class="card">
      <div class="card-header"></div>
      <div class="card-body">
        <form v-on:submit.prevent="registrarCliente">
          <div class="form-group mt-4">
            <label for="nombre">Nombre Completo</label>
            <input
              type="text"
              class="form-control"
              id="nombre"
              name="nombre"
              v-model="cliente.nombre"
              placeholder="Ingresar Nombre"
              required
            />
          </div>
          <div class="form-group mt-4">
            <label for="email">Correo Electronico</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              v-model="cliente.email"
              placeholder="Ingresar Correo Electronico"
              required
            />
          </div>
          <div class="form-group mt-4">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <router-link :to="{ name: 'Listar' }">
                  <button class="btn btn-danger btn-block">Cancelar</button>
                </router-link>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <button type="submit" class="btn btn-primary btn-block">
                  Registrar Cliente
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="card-footer"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cliente: {},
    };
  },
  methods: {
    registrarCliente() {
      const datosEnviar = {
        nombre: this.cliente.nombre,
        correo: this.cliente.email,
      };
      fetch("http://localhost/vuejs_backend/?insertar=1", {
        method: "POST",
        body: JSON.stringify(datosEnviar),
      })
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