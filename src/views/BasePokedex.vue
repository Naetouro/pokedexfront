<template>
  <div v-if="isLoaded" class="basePokedex">
    <pokemon-filter :types="types" />
    <pokemon-search :pokemon-names="pokemonNames" />
    <pokemon-list :pokemons="pokemons" />
    <pokemon-pagination
      :total-pokemons="totalPokemons"
      :page="page"
      :number="number"
    />
  </div>
</template>

<script>
import PokemonList from "@/components/PokemonList";
import PokemonSearch from "@/components/PokemonSearch";
import PokemonPagination from "@/components/PokemonPagination";
import PokemonFilter from "@/components/PokemonFilter";
import BusEvent from "@/components/unique/BusEvent";
import * as ApiPokemon from "@/store/api/Pokemon";
import * as ApiType from "@/store/api/Type";

export default {
  name: "listPokemon",
  components: {
    PokemonList,
    PokemonSearch,
    PokemonPagination,
    PokemonFilter
  },
  data() {
    return {
      pokemons: Array,
      isLoaded: false,
      page: 1,
      number: 5,
      totalPokemons: Number,
      types: [],
      pokemonNames: []
    };
  },
  created() {
    BusEvent.$on("pokemon-search", name => this.findAllPokemonByNameLike(name));
    BusEvent.$on("next-page", this.nextPage);
    BusEvent.$on("previous-page", this.previousPage);
    BusEvent.$on("change-page", page => this.changePage(page));
    BusEvent.$on("pokemon-filter", checkedTypes =>
      this.filterPokemon(checkedTypes)
    );
  },
  mounted() {
    this.findAllType();
    this.findAllNames();
    this.findAllPokemon();
  },
  methods: {
    findAllPokemon: function() {
      ApiPokemon.findAllPokemon(this.page, this.number).then(response => {
        if (response.status === 200) {
          this.pokemons = response.data.pokemons;
          this.totalPokemons = response.data.count;
          this.isLoaded = true;
        }
      });
    },
    findAllFilterPokemon: function(checkedTypes) {
      ApiPokemon.findAllFilterPokemon(
        this.page,
        this.number,
        checkedTypes
      ).then(response => {
        if (response.status === 200) {
          this.pokemons = response.data.pokemons;
          this.totalPokemons = response.data.count;
        }
      });
    },

    findAllPokemonByNameLike: function(name) {
      ApiPokemon.findAllPokemonByNameLike(this.page, this.number, name).then(
        response => {
          if (response.status === 200) {
            this.pokemons = response.data.pokemons;
            this.totalPokemons = response.data.count;
          }
        }
      );
    },
    findAllType: function() {
      ApiType.findAllType().then(response => {
        if (response.status === 200) {
          this.types = response.data;
        }
      });
    },
    findAllNames: function() {
      ApiPokemon.findAllNames().then(response => {
        if (response.status === 200) {
          this.pokemonNames = response.data;
        }
      });
    },
    filterPokemon: function(checkedTypes) {
      if (checkedTypes.length === 0) {
        this.findAllPokemon();
      } else {
        this.findAllFilterPokemon(checkedTypes);
      }
    },
    nextPage: function() {
      if (this.page + 1 <= Math.ceil(this.totalPokemons / this.number)) {
        this.page += 1;
        this.findAllPokemon();
      }
    },
    previousPage: function() {
      if (this.page - 1 >= 1) {
        this.page -= 1;
        this.findAllPokemon();
      }
    },
    changePage: function(i) {
      if (i !== this.page) {
        this.page = i;
        this.findAllPokemon();
      }
    }
  }
};
</script>

<style scoped>
.basePokedex {
  min-height: 100%;
}
</style>
