import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export async function getPokemons() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
      const pokemonsList = response.data.results;
  
      const detailedPokemons = await Promise.all(pokemonsList.map(async (pokemon) => {
        const detailsResponse = await axios.get(pokemon.url);
        return {
          weight: detailsResponse.data.weight,
          name: detailsResponse.data.name,
          types: detailsResponse.data.types,
          id: detailsResponse.data.id
        }
      }));
  
      return detailedPokemons;
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      return [];
    }
  }

export const getPokemonDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return {
      weight: response.data.weight,
      name: response.data.name,
      types: response.data.types,
      id: response.data.id,
      moves: response.data.moves
    };
  } catch (error) {
    console.error('Error fetching pokemon details:', error);
  }
};