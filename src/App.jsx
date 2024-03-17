import s from "./App.module.css";
import ItemHeader from "./components/ItemHeader";
import ItemInput from "./components/ItemInput";
import SumFooter from "./components/SumFooter";
import { useEffect, useState } from "react";
import { deleteTodoAPI } from "./features/todo/api/deleteOneTodo.mjs";
import { updateOneTodoAPI } from "./features/todo/api/updateOneTodo.mjs";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodosAPI } from "./features/todo/api/getAllTodos.mjs";
import { createTodoAPI } from "./features/todo/api/createOneTodo.mjs";
// import { createTodoAPI } from "./features/todo/api/createOneTodo.mjs";

export default function App() {
  const newId = String(Math.trunc(Math.random() * 9995) + 5)
  const [isCreateMode, setCreateMode] = useState(false);
  const todoState = useSelector((state) => state.todo);
  const todo = todoState.todo;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllTodosAPI())
  }, [dispatch])
  
  // const sum = fruits.reduce((a, b) => a + (b.price * b.quantity), 0)
  
  const handleNewTodo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const _msg = formData.get(`todoInput_${newId}`)
    const newTodo = {
      // id: newId,
      status: "IN_PROGRESS",
      msg: _msg,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      finishedAt: null,
      userId: 1,
    }
    dispatch(createTodoAPI(newTodo))
      .then(() => dispatch(getAllTodosAPI()))
    setCreateMode(false);
  }

  const handleEdit = (newTodo) => {
    const { id } = newTodo
    dispatch(updateOneTodoAPI({ id, todo: newTodo }))
    .then(() => dispatch(getAllTodosAPI()))
  };
  
  const handleDelete = (id) => {
    dispatch(deleteTodoAPI(id))
    .then(() => dispatch(getAllTodosAPI()))
  };

  return (
    <>
      <div className={s.appContainer}>
        <form onSubmit={handleNewTodo} className={s.form}>
          <div className={s.fieldset}>
            <h2>Getting Things Done</h2>
            <ItemHeader></ItemHeader>
            {todo.map((t) => (
              <ItemInput
                key={t.id}
                todo={t}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                isCreateMode={false}
              ></ItemInput>
            ))}
            {isCreateMode ? <ItemInput key='newFruitId' 
              todo={{
                id: newId,
                msg: '',
                status: "IN_PROGRESS",
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                finishedAt: null,
              }} 
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              setCreateMode={setCreateMode}
              isCreateMode={isCreateMode}
            ></ItemInput> : null}
            <SumFooter isCreateMode={isCreateMode} setCreateMode={setCreateMode}></SumFooter>
          </div>
        </form>
      </div>
    </>
  );
}
