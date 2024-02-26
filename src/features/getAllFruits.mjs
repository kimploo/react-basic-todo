import { HOST } from './api.mjs'

export default function getAllFruits() {
  const url = new URL(HOST)
  url.pathname = '/fruits';
  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Network response was not ok.');
    })
}
