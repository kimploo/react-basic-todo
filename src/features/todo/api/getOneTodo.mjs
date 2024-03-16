import { createAsyncThunk } from '@reduxjs/toolkit';
import { HOST } from '../../api.mjs'

export default function getOneTodo(id) {
  const url = new URL(HOST)
  url.pathname = `/todo/${id}`;
  return fetch(url)
  .then(res => {
    if (res.ok) return res.json()
  })
}

export const getOneTodoAPI = createAsyncThunk('todo/getOne', getOneTodo)