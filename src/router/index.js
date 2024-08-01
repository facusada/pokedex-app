import { createRouter, createWebHistory } from 'vue-router';
import PokemonList from '../components/PokemonList.vue';
import PokemonDetails from '../components/PokemonDetails.vue';

const routes = [
  { path: '/', component: PokemonList },
  { path: '/pokemon/:id', name: 'pokemon-details', component: PokemonDetails }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
