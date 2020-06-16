import axios from "axios";

const uri = "https://gatewaypokedex.herokuapp.com/pokedex/pokedex";

export function login(name, password) {
  return axios
    .post(
      uri + "/login",
      { headers: { "Content-Type": "application/json" } },
      {
        data: {
          name: name,
          password: password
        }
      }
    )
    .then(result => {
      return result;
    })
    .catch(error => {
      return error.response;
    });
}

export function signup(name, password) {
  return axios
    .post(
      uri + "/signup",
      { headers: { "Content-Type": "application/json" } },
      {
        data: {
          name: name,
          password: password
        }
      }
    )
    .then(result => {
      return result;
    })
    .catch(error => {
      return error.response;
    });
}
