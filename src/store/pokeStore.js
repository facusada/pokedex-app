import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      selectedPokemon: {}
    };
  },
  mutations: {
    setSelectedPokemon(state, pokemon) {
      state.selectedPokemon = pokemon;
    }
  },
  actions: {
    updatePokemon({ commit }, pokemon) {
      commit('setSelectedPokemon', pokemon);
    }
  },
  getters: {
    selectedPokemon: state => state.selectedPokemon
  }
})

export default store;
