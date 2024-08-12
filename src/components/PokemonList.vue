<template>
  <div class="pokemon-background" v-if="pokemons">
    <div class="pokemon-title">
      <h1>Pokedex</h1>
    </div>
    <div class="pokemon-container">
      <div class="pokemon-list" v-for="pokemon in pokemons" :key="pokemon.name">
        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`" alt="pokemon.name" />
        <div class="pokemon-detail">
          <div class="detail-type">
            <h4 class="">Type:</h4>
            <p v-for="type in pokemon.types" :key="type.type.slot">{{ type.type.name }}</p>
          </div>
          <div class="detail-weight">
            <h4>Weight:</h4>
            <p>{{ pokemon.weight }} hg</p>
          </div>
        </div>
        <div @click="selectPokemon(pokemon.id)" class="pokemon-actions">
          <button class="detail-button">Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPokemons } from '../services/pokemon';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      pokemons: null,
    };
  },
  async mounted() {
    this.pokemons = await getPokemons();
  },
  methods: {
    ...mapActions(['updatePokemon']),
    selectPokemon(id) {
      this.updatePokemon(this.pokemons[id - 1])
      this.$router.push({ name: 'pokemon-details', params: { id: id}});
    }
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .pokemon-container {
    height: inherit !important;
    display: flex !important;
    flex-direction: row !important;
    justify-content: center !important;
  }
}
.pokemon-background {
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 203, 5, 0.8), rgba(61, 125, 202, 0.8)) no-repeat center center fixed;
  background-size: cover;
}
.pokemon-title {
  text-align: center;
  margin-bottom: 20px;
}
.pokemon-container {
  height: 100vh;
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}
.pokemon-list {
  width: 400px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
}
.pokemon-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.pokemon-actions {
  cursor: pointer;
  display: flex;
  display: flex;
  align-items: center;
}
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
}

.detail-type {
  display: flex;
  gap: 10px;
}
.detail-weight {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.detail-button {
  height: min-content;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.detail-button:hover {
  background-color: #0056b3;
}

.detail-button:active {
  transform: scale(0.95);
}
</style>
