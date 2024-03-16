import { createAsyncThunk } from '@reduxjs/toolkit';
import { HOST } from '../../api.mjs'

export default function getAllTodos() {
  const url = new URL(HOST)
  url.pathname = '/todo';
  return fetch(url)
  .then(res => {
    if (res.ok) return res.json()
  })
}

export const getAllTodosAPI = createAsyncThunk('todo/getAll', getAllTodos)