<template>
  <div class="login">
    <h1>Connexion</h1>
    <form @submit.prevent="login">
      <label for="name">Nom</label>
      <input v-model="name" id="name" type="text" />
      <label for="password">Mot de passe</label>
      <input v-model="password" id="password" type="password" />
      <input class="submit" type="submit" value="connexion" />
      <span v-if="error"> {{ errorMessage }} </span>
    </form>
  </div>
</template>

<script>
import * as ApiUser from "@/store/api/User";
import * as StorageUser from "@/store/storage/User";

export default {
  name: "Login",
  data: function() {
    return {
      name: "",
      password: "",
      res: "",
      error: false,
      errorMessage: "Nom ou mot de passe incorrect"
    };
  },
  methods: {
    login: function() {
      ApiUser.login(this.name, this.password).then(user => {
        if (user.status === 200) {
          StorageUser.createKeyId(user.data);
          this.$store.commit("changeLogged", true);
          this.$router.push({ name: "pokedex" });
        } else {
          this.error = true;
        }
      });
    }
  }
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.submit {
  width: 130px;
  height: 40px;
  margin: 10px auto;
}

h1 {
  margin: auto;
}
form {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: auto;
}

input {
  margin: 10px 0 10px 0;
}
</style>
