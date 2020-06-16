<template>
  <div v-if="isLoaded" id="pokemon">
    <h1>Fiche de {{ pokemon.name | capitalize }}</h1>
    <div class="description-statistics">
      <pokemon-description class="description" :pokemon="pokemon" />
      <pokemon-statistics class="statistics" :statistics="pokemon.statistics" />
    </div>
    <pokemon-evolutions
      :currentPokemon="pokemon"
      :nextEvolutions="pokemon.nextEvolutions"
      :previousEvolutions="pokemon.previousEvolutions"
    />
    <pokemon-talents :talents="pokemon.talents" />
    <pokemon-capacities :capacities="pokemon.capacities" />
    <pokemon-weaknesses :weaknesses="pokemon.weaknesses" />
  </div>
</template>

<script>
import Pokemon from "@/store/classes/Pokemon";
import PokemonCapacities from "@/components/PokemonCapacities";
import PokemonTalents from "@/components/PokemonTalents";
import PokemonStatistics from "@/components/PokemonStatistics";
import PokemonEvolutions from "@/components/PokemonEvolutions";
import PokemonDescription from "@/components/PokemonDescription";
import PokemonWeaknesses from "@/components/PokemonWeaknesses";
import * as ApiPokemon from "@/store/api/Pokemon";

export default {
  name: "pokemon",
  components: {
    PokemonWeaknesses,
    PokemonCapacities,
    PokemonTalents,
    PokemonStatistics,
    PokemonEvolutions,
    PokemonDescription
  },
  data() {
    return {
      pokemon: Pokemon,
      isLoaded: false
    };
  },
  mounted() {
    this.findById();
  },
  methods: {
    findById() {
      ApiPokemon.findById(this.$route.params.id).then(response => {
        if (response.status === 200) {
          this.pokemon = new Pokemon(response.data);
          this.isLoaded = true;
        }
      });
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteUpdate(to, from, next) {
    this.$route.params.id = to.params.id;
    this.findById(this.$route.params.id);
    next();
  }
};
</script>

<style scoped>
#pokemon {
  margin: 20px 100px 0 100px;
  background-color: white;
  padding: 50px;
  overflow: hidden;
}

.description-statistics {
  display: flex;
  width: 100%;
  flex-direction: row;
}

.description,
.statistics {
  width: 100%;
  display: flex;
  justify-content: center;
}

.description {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
