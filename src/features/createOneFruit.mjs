import { HOST } from './api.mjs'

export default function createOneFruit(fruit) {
  const url = new URL(HOST)
  url.pathname = '/fruits';
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(fruit)
  });
}
