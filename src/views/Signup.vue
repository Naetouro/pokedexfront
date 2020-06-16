<template>
  <div class="login">
    <h1>Inscription</h1>
    <form @submit.prevent="checkForm">
      <label for="name">Nom</label>
      <input v-model="name" id="name" type="text" />
      <label for="password">Mot de passe</label>
      <input v-model="password" id="password" type="password" />
      <label for="confirm-password">Confirmer le mot de passe</label>
      <input v-model="confirmPassword" id="confirm-password" type="password" />
      <input class="submit" type="submit" value="connexion" />
      <span v-if="isError">{{ errorMessage }}</span>
    </form>
  </div>
</template>

<script>
import * as ApiUser from "@/store/api/User";

export default {
  name: "Signup",
  data: function() {
    return {
      name: "",
      password: "",
      confirmPassword: "",
      isError: false,
      errorMessage: "Nom d'utilisateur indisponible"
    };
  },
  methods: {
    signup: function() {
      ApiUser.signup(this.name, this.password).then(result => {
        if (result.status === 200) {
          this.$router.push({ name: "login" });
        } else {
          this.isError = true;
        }
      });
    },
    checkForm: function() {
      if (this.password === this.confirmPassword) {
        this.signup();
      }
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
