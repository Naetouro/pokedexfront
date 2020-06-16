<template>
  <div>
    <h2>Capacités</h2>
    <b-table :items="capacities" :fields="fields">
      <template v-slot:cell(type.name)="data">
        <span class="type" :class="data.value">{{ data.value }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "PokemonCapacities",
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Nom"
        },
        {
          key: "damage",
          label: "Dégats"
        },
        {
          key: "level",
          label: "Niveau"
        },
        {
          key: "type.name",
          label: "Type"
        }
      ]
    };
  },
  props: {
    capacities: Array
  }
};
</script>

<style scoped>
@import "../assets/css/TypeStyle.css";
.type {
  display: block;
}
</style>
