<template>
  <div id="nav">
    <b-navbar type="light" toggleable="lg">
      <b-navbar-brand to="/">Pokedex</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Pokedex</b-nav-item>
          <b-nav-item v-if="!isLogged" to="/login"> Connexion </b-nav-item>
          <b-nav-item v-if="!isLogged" to="/signup"> Inscription </b-nav-item>
          <b-nav-item v-if="isLogged" @click="deconnexion">
            Deconnexion
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import * as StorageUser from "@/store/storage/User";

export default {
  name: "TheMenu",
  methods: {
    deconnexion: function() {
      StorageUser.deleteKeyId();
      this.$store.commit("changeLogged", false);
      this.$router.push({ name: "login" });
    }
  },
  computed: {
    isLogged() {
      return this.$store.state.isLogged;
    }
  }
};
</script>

<style scoped>
#nav {
  background-color: deepskyblue;
}
</style>
