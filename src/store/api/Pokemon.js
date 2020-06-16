import axios from "axios";

//const uri = "http://localhost:8083/pokedex/pokemon";
const uri = "https://gatewaypokedex.herokuapp.com/pokedex/pokemon";

export function findAllPokemon(page, number) {
  let idUser = getIdUser();

  return axios
    .get(uri, {
      params: {
        idUser: idUser,
        page: page - 1,
        number: number
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

export function findAllFilterPokemon(page, number, typeIds) {
  let idUser = getIdUser();

  return axios
    .get(uri + "/filter", {
      params: {
        idUser: idUser,
        page: page - 1,
        number: number,
        typeIds: typeIds.toString()
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

export function findAllPokemonByNameLike(page, number, name) {
  let idUser = getIdUser();

  return axios
    .get(uri + "/name", {
      params: {
        idUser: idUser,
        page: page - 1,
        number: number,
        name: name
      }
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

export function findAllNames() {
  return axios
    .get(uri + "/names")
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
}

export function findById(idPokemon) {
  let idUser = getIdUser();
  return axios
    .get("http://localhost:8083/pokedex/pokemon/" + idPokemon, {
      params: {
        idUser: idUser
      }
    })
    .then(result => {
      return result;
    })
    .catch(error => {
      return error.response;
    });
}

function getIdUser() {
  let id;
  return (id = localStorage.getItem("id")) === null ? 0 : id;
}
