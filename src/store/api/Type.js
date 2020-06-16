import axios from "axios";

const uri = "https://gatewaypokedex.herokuapp.com/pokedex/type";

export function findAllType() {
  return axios
    .get(uri)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}
