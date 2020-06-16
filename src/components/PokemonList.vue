<template>
  <div id="list-pokemon">
    <template v-for="pokemon in pokemons">
      <router-link
        class="card-custom"
        :key="pokemon.id"
        :to="'/pokemon/' + pokemon.id"
      >
        <div class="img-container">
          <img
            class="img-card"
            alt="img"
            :src="'data:image/png;base64,' + pokemon.image"
          />
        </div>
        <div class="text-container">
          <h3>{{ pokemon.name | capitalize }}</h3>
          <div class="types">
            <span class="type" :class="pokemon.type1">
              {{ pokemon.type1 }}
            </span>
            <span
              v-if="pokemon.type2 !== null"
              class="type"
              :class="pokemon.type2"
            >
              {{ pokemon.type2 }}
            </span>
          </div>
          <b-button
            @click="releasePokemon(pokemon.id, $event)"
            class="catch-button"
            v-if="pokemon.caught"
          >
            Relacher
          </b-button>
          <b-button
            @click="catchPokemon(pokemon.id, $event)"
            class="catch-button"
            v-else
          >
            Capturer
          </b-button>
          <div class="pokeball-caught">
            <img
              v-if="pokemon.caught"
              :src="require('@/assets/pokeball.png')"
              alt="pokeball"
            />
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListPokemon",
  props: {
    pokemons: Array
  },
  methods: {
    catchPokemon: function(idPokemon, e) {
      e.preventDefault();
      let id;
      let idUser = (id = localStorage.getItem("id")) === null ? 0 : id;
      axios
        .post(
          "http://localhost:8083/pokedex/pokemonUser",
          { headers: { "Content-Type": "application/json" } },
          {
            data: {
              idUser: idUser,
              idPokemon: idPokemon
            }
          }
        )
        .then(
          (this.pokemons.find(
            pokemon => pokemon.id === idPokemon
          ).caught = true)
        )
        .catch();
    },
    releasePokemon: function(idPokemon, e) {
      e.preventDefault();
      let id;
      let idUser = (id = localStorage.getItem("id")) === null ? 0 : id;

      axios
        .delete("http://localhost:8083/pokedex/pokemonUser", {
          data: {
            idUser: idUser,
            idPokemon: idPokemon
          }
        })
        .then(
          (this.pokemons.find(
            pokemon => pokemon.id === idPokemon
          ).caught = false)
        )
        .catch();
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style scoped>
@import "../assets/css/TypeStyle.css";

#list-pokemon {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 1100px;
  margin: 15px auto 15px auto;
}
.card-custom {
  width: 350px;
  height: 100%;
  text-align: center;
  background-color: white;
  margin: 0 10px 10px 0;
  padding: 5px;
}

.img-container {
  width: 100%;
  height: 200px;
  padding: 10px;
}

.pokeball-caught {
  width: 25px;
  height: 25px;
  margin: 10px auto 10px auto;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.types {
  display: flex;
  justify-content: center;
  margin: 10px 0 10px 0;
}
</style>
