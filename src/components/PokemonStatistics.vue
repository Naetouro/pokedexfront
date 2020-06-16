<template>
  <div>
    <b-table-simple class="table-statistics">
      <b-tbody>
        <b-tr>
          <b-th>PV</b-th>
          <b-td>{{ statistics.pv }}</b-td>
        </b-tr>
        <b-tr>
          <b-th>Attaque</b-th>
          <b-td>{{ statistics.attack }}</b-td>
        </b-tr>
        <b-tr>
          <b-th>Defense</b-th>
          <b-td>{{ statistics.defense }}</b-td>
        </b-tr>
        <b-tr>
          <b-th>Attaque special</b-th>
          <b-td>{{ statistics.specialAttack }}</b-td>
        </b-tr>
        <b-tr>
          <b-th>Defense special</b-th>
          <b-td>{{ statistics.specialDefense }}</b-td>
        </b-tr>
        <b-tr>
          <b-th>Vitesse</b-th>
          <b-td>{{ statistics.speed }}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
export default {
  name: "PokemonStatistics",
  props: {
    statistics: Object
  }
};
</script>

<style scoped>
.table-statistics {
  height: 100%;
  width: 70%;
}

td {
  text-align: right;
}
</style>
