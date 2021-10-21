import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Listar from '../components/Listar.vue';
import Actualizar from '../components/Actualizar.vue';
import Registrar from '../components/Registrar.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/listar',
    name: 'Listar',
    component: Listar,
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: Registrar,
  },
  {
    path: '/actualizar',
    name: 'Actualizar',
    component: Actualizar,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
