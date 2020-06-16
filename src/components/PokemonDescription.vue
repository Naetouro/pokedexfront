<template>
  <div>
    <div class="card-custom">
      <div class="img-container">
        <img
          class="img-card"
          alt="img"
          :src="'data:image/png;base64,' + pokemon.image"
        />
      </div>
      <div class="text-container">
        <h3>{{ pokemon.name | capitalize }}</h3>
        <div class="poidsTaille">
          <span>Taille : {{ pokemon.height }}</span>
          <span>Poids : {{ pokemon.weight }}</span>
        </div>
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
        <div class="pokeball-caught">
          <img
            v-if="pokemon.caught"
            :src="require('@/assets/pokeball.png')"
            alt="pokeball"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pokemon from "../store/classes/Pokemon";

export default {
  name: "PokemonDescription",
  props: {
    pokemon: Pokemon
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
.card-custom {
  width: 350px;
  height: auto;
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

.pokeball-caught {
  width: 25px;
  height: 25px;
  margin: auto;
}

.pokeball-caught img {
  width: 100%;
  height: 100%;
}

.img-container {
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
}

.types {
  display: flex;
  justify-content: center;
  margin: 1em 0 1em 0;
}
.poidsTaille {
  display: flex;
  flex-direction: column;
}
</style>
