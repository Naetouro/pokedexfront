<template>
  <div>
    <h2>Talents</h2>
    <b-table :items="talents" :fields="fields" />
  </div>
</template>

<script>
export default {
  name: "PokemonTalents",
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Nom"
        },
        {
          key: "description",
          label: "Description"
        }
      ]
    };
  },
  props: {
    talents: Array
  }
};
</script>

<style scoped></style>
