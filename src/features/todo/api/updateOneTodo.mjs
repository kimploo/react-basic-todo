import { createAsyncThunk } from "@reduxjs/toolkit";
import { HOST } from "../../api.mjs";

export default function updateOneTodo({ id, todo }) {
  const url = new URL(HOST)
  url.pathname = `/todo/${id}`;
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(todo)
  })
  .then(res => {
    if (res.ok) return res.json()
  })
}

export const updateOneTodoAPI = createAsyncThunk('todo/update', updateOneTodo)
