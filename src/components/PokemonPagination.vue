<template>
  <div>
    <ul class="pagination b-pagination">
      <li class="page-item">
        <button class="page-link" @click="previousPage">previous</button>
      </li>
      <li
        class="page-item"
        v-for="i in Math.ceil(totalPokemons / number)"
        :key="'previous' + i"
      >
        <button class="page-link" v-if="i < page" @click="changePage(i)">
          {{ i }}
        </button>
      </li>
      <li class="page-item">
        <button class="page-link">{{ page }}</button>
      </li>

      <li
        class="page-item"
        v-for="i in Math.ceil(totalPokemons / number)"
        :key="'next' + i"
      >
        <button class="page-link" v-if="i > page" @click="changePage(i)">
          {{ i }}
        </button>
      </li>

      <li class="page-item">
        <button class="page-link" @click="nextPage">next</button>
      </li>
    </ul>
  </div>
</template>

<script>
import BusEvent from "@/components/unique/BusEvent";

export default {
  name: "PokemonPagination",
  props: {
    totalPokemons: Number,
    number: Number,
    page: Number
  },
  methods: {
    nextPage: function() {
      BusEvent.$emit("next-page");
    },
    previousPage: function() {
      BusEvent.$emit("previous-page");
    },
    changePage: function(page) {
      BusEvent.$emit("change-page", page);
    }
  }
};
</script>

<style scoped>
.pagination {
  justify-content: center;
  margin-bottom: 10px;
}
</style>
