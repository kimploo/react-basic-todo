import { HOST } from "./api.mjs";

export default function removeOneFruit(id) {
  const url = new URL(HOST)
  url.pathname = `/fruits/${id}`;
  return fetch(url, {
    method: 'DELETE'
  })
    .then(res => res.json())
}
