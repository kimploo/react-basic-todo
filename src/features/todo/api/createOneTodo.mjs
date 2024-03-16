import { createAsyncThunk } from '@reduxjs/toolkit';
import { HOST } from '../../api.mjs'

export default function createOneFruit(fruit) {
  const url = new URL(HOST)
  url.pathname = '/todo';
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(fruit)
  })
  .then(res => {
    if (res.ok) return res.json()
  })
}

export const createTodoAPI = createAsyncThunk('todo/create', createOneFruit)