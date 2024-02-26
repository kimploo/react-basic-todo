import { HOST } from './api.mjs'

export default function getAllFruits() {
  const url = new URL(HOST)
  url.pathname = '/fruits';
  return fetch(url)
    .then(res => res.json())
}
