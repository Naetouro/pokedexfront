<template>
  <div class="evolutions">
    <h2>Evolutions</h2>
    <div class="list-evolutions">
      <template v-for="pokemon in previousEvolutions">
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
            <span v-if="pokemon.levelEvolution > 0">
              {{ pokemon.levelEvolution }}
            </span>
            <span v-else-if="pokemon.conditionEvolution !== null">
              {{ pokemon.conditionEvolution }}
            </span>
            <span v-else>-</span>
          </div>
        </router-link>
      </template>

      <div class="card-custom" :to="'/pokemon/' + currentPokemon.id">
        <div class="img-container">
          <img
            class="img-card"
            alt="img"
            :src="'data:image/png;base64,' + currentPokemon.image"
          />
        </div>
        <div class="text-container">
          <h3>{{ currentPokemon.name | capitalize }}</h3>
          <span v-if="currentPokemon.levelEvolution > 0">
            {{ currentPokemon.levelEvolution }}
          </span>
          <span v-else-if="currentPokemon.conditionEvolution !== null">
            {{ currentPokemon.conditionEvolution }}
          </span>
          <span v-else>-</span>
        </div>
      </div>

      <template v-for="pokemon in nextEvolutions">
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
            <span v-if="pokemon.levelEvolution > 0">
              {{ pokemon.levelEvolution }}
            </span>
            <span v-else-if="pokemon.conditionEvolution !== null">
              {{ pokemon.conditionEvolution }}
            </span>
            <span v-else>-</span>
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import Pokemon from "@/store/classes/Pokemon";

export default {
  name: "PokemonEvolutions",
  props: {
    nextEvolutions: Array,
    previousEvolutions: Array,
    currentPokemon: Pokemon
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
.evolutions {
  width: 100%;
}
.list-evolutions {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.img-container {
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
}

.card-custom {
  width: 350px;
  height: 100%;
  background-color: white;
  margin: 0 10px 10px 0;
  padding: 1em;
}

.card-custom h3 {
  margin: 10px;
  font-size: 1.5em;
}

.text-container {
  text-align: center;
}

.img-card {
  max-width: 100%;
  max-height: 100%;
}
</style>
