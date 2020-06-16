<template>
  <div class="weaknesses">
    <h2>Faiblesses</h2>
    <table>
      <caption></caption>
      <thead>
        <tr>
          <th
            v-for="weakness in weaknesses"
            :key="weakness.typeName"
            class="type"
            :class="weakness.typeName"
            scope="col"
          >
            {{ weakness.typeName | firstLetters }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            v-for="weakness in weaknesses"
            :key="weakness.typeName"
            :class="[
              { 'very-efficient': weakness.multiple === 4 },
              { efficient: weakness.multiple === 2 },
              { average: weakness.multiple === 1 },
              { inefficient: weakness.multiple === 0.5 },
              { 'very-inefficient': weakness.multiple === 0.25 },
              { null: weakness.multiple === 0 }
            ]"
          >
            {{ weakness.multiple }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PokemonWeaknesses",
  props: {
    weaknesses: Array
  },
  filters: {
    firstLetters: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.substr(0, 3);
    }
  }
};
</script>

<style scoped>
@import "../assets/css/TypeStyle.css";

.weaknesses {
  margin-bottom: 10px;
}

table {
  width: 100%;
}

th,
td {
  text-align: center;
  height: 30px;
  vertical-align: middle;
}
th {
  padding: 0.5rem;
}

.type {
  width: 50px;
}

.very-efficient {
  background-color: red;
}
.efficient {
  background-color: indianred;
}
.average {
  background-color: beige;
}
.inefficient {
  background-color: green;
}
.very-inefficient {
  background-color: greenyellow;
}
.null {
  background-color: dimgrey;
}
</style>
