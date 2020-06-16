export function createKeyId(user) {
  localStorage.setItem("key", btoa(user.name + ":" + user.password));
  localStorage.setItem("id", user.id);
}

export function deleteKeyId() {
  localStorage.removeItem("key");
  localStorage.removeItem("id");
}

export function getKey() {
  return localStorage.getItem("key");
}

export function getId() {
  return localStorage.getItem("id");
}
