<template>
  <div class="search">
    <form @submit.prevent="test">
      <label>
        Recherche pokemon
        <input
          class="search-bar"
          @click.stop="toggleDropdown"
          type="text"
          v-model="search"
        />
      </label>
      <ul class="search-list" v-if="showDropdown">
        <li v-for="name in filteredList" :key="name">
          <button @click="setSearch(name)">{{ name }}</button>
        </li>
      </ul>
      <input class="search-submit" type="submit" value="rechercher" />
    </form>
  </div>
</template>

<script>
import BusEvent from "@/components/unique/BusEvent";
export default {
  name: "PokemonSearch",
  props: {
    pokemonNames: Array
  },
  data() {
    return {
      search: "",
      showDropdown: false
    };
  },
  methods: {
    test: function() {
      BusEvent.$emit("pokemon-search", this.search);
    },
    setSearch(name) {
      this.search = name;
    },
    toggleDropdown: function() {
      this.showDropdown = !this.showDropdown;
      if (this.showDropdown) {
        window.addEventListener("click", () => {
          this.showDropdown = false;
        });
      } else {
        window.removeEventListener("click", () => {
          this.showDropdown = false;
        });
      }
    }
  },
  computed: {
    filteredList() {
      return this.pokemonNames.filter(name => {
        return name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
};
</script>

<style scoped>
.search {
  width: 250px;
  margin: auto;
}

.search-submit {
  width: 100%;
}

.search .search-bar,
.search-submit {
  margin-top: 10px;
}

.search-list {
  position: absolute;
  width: 250px;
}

.search-list button {
  width: 100%;
  text-align: left;
  height: 50px;
  border: none;
}
</style>
