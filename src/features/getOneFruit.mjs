import { HOST } from './api.mjs'

export default function getOneFruit(id) {
  const url = new URL(HOST)
  url.pathname = `/fruits/${id}`;
  return fetch(url)
    .then(res => res.json())
}
