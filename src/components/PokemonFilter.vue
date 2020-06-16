<template>
  <div class="filter">
    <h2>Filtre</h2>
    <ul class="filter_list">
      <li v-for="type in types" :key="type.id">
        <label>
          {{ type.name }}
          <input
            v-model="checkedTypes"
            type="checkbox"
            :id="type.id"
            :value="type.id"
          />
        </label>
      </li>
    </ul>
    <b-button @click="filter">Filtrer</b-button>
  </div>
</template>

<script>
import BusEvent from "@/components/unique/BusEvent";
export default {
  name: "PokemonFilter",
  props: {
    types: Array
  },
  data: function() {
    return {
      checkedTypes: []
    };
  },
  methods: {
    filter: function() {
      BusEvent.$emit("pokemon-filter", this.checkedTypes);
    }
  }
};
</script>

<style scoped>
.filter {
  margin: 20px auto;
  width: 1100px;
  background-color: white;
  padding: 20px;
}

.filter h2 {
  margin-bottom: 10px;
}

.filter label {
  display: flex;
  margin: 5px 5px 5px 0;
  flex-direction: row-reverse;
}

.filter input {
  margin-right: 5px;
}

.filter button {
  margin-top: 10px;
}

.filter_list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
