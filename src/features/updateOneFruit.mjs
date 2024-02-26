import { HOST } from "./api.mjs";

export default function updateOneFruit(id, fruit) {
  const url = new URL(HOST)
  url.pathname = `/fruits/${id}`;
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(fruit)
  });
}
