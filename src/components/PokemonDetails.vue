<template>
  <div class="details-container">
    <div class="details" v-if="pokemon">
      <div class="details-actions">
        <button class="go-back-button" @click="$router.go(-1)">
          Go back
        </button>
      </div>
      <h1 class="details-name">{{ pokemon.name }}</h1>
      <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`" alt="pokemon.name" />
      <div class="details-description">
        <div class="description">
          <div class="description-type">
            <h4 class="">Type:</h4>
            <p v-for="type in pokemon.types" :key="type.type.slot">{{ type.type.name }}</p>
          </div>
          <div class="description-weight">
            <h4>Weight:</h4>
            <p>{{ pokemon.weight }} hg</p>
          </div>
        </div>
        <h2>Moves:</h2>
        <div class="description-moves">
          <p v-for="move in pokemon.moves" :key="move.move.name">{{ move.move.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPokemonDetails } from '../services/pokemon';

export default {
  data() {
    return {
      pokemon: null,
    };
  },
  async created() {
    const id = this.$route.params.id;
    this.pokemon = await getPokemonDetails(id);
  }
};
</script>

<style scoped>
.details-container {
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(255, 203, 5, 0.8), rgba(61, 125, 202, 0.8)) no-repeat center center fixed;
  background-size: cover;
  padding: 20px;
}
.details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.details-name::first-letter {
  text-transform: uppercase;
}
.details-description {
  height: 650px;
}
.details-actions {
  width: 100%;
  display: flex;
}
img {
  max-width: 200px;
  margin-bottom: 20px;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.description-type {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.description-weight {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.description-moves {
  max-height: 500px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 10px;
}
p {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin: 0 0 20px 0;
  padding: 0;
  text-align: left;
  max-width: 600px;
  word-wrap: break-word;
}
.go-back-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.go-back-button:hover {
  background-color: #0056b3;
}

.go-back-button:active {
  transform: scale(0.95);
}
</style>