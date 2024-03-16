import { createAsyncThunk } from "@reduxjs/toolkit";
import { HOST } from "../../api.mjs";

export default function deleteOneTodo(id) {
  const url = new URL(HOST)
  url.pathname = `/todo/${id}`;
  return fetch(url, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(res => {
    if (res.ok) return res.json()
  })
}

export const deleteTodoAPI = createAsyncThunk('todo/delete', deleteOneTodo)