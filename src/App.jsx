import s from "./App.module.css";
import ItemHeader from "./components/ItemHeader";
import ItemInput from "./components/ItemInput";
import fruitsData from "../db.json";
import SumFooter from "./components/SumFooter";
import { useState } from "react";

export default function App() {
  const newId = Math.trunc(Math.random() * 9995) + 5
  const [isCreateMode, setCreateMode] = useState(false);
  const [fruits, setFruits] = useState(fruitsData.map(f => {
    f.quantity = 0;
    return f
  }));
  const sum = fruits.reduce((a, b) => a + (b.price * b.quantity), 0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const _name = formData.get(`nameInput_${newId}`)
    const _price = formData.get(`priceInput_${newId}`)
    const _quantity = formData.get(`quantityInput_${newId}`)
    const newFruit = {
      id: newId,
      name: _name,
      price: _price,
      quantity: _quantity
    }
    setFruits([...fruits, newFruit]);
    setCreateMode(false);
  }

  const handleCreate = (newFruit) => {
    setFruits([...fruits, newFruit]);
  }

  const handleEdit = (newFruit) => {
    const idx = fruits.findIndex((f) => f.id === newFruit.id);
    if (idx !== -1) {
      const copy = fruits.slice();
      copy.splice(idx, 1, newFruit);
      setFruits(copy);
    }
  };

  const handleDelete = (id) => {
    setFruits(fruits.filter((f) => f.id !== id));
  };

  return (
    <>
      <div className={s.appContainer}>
        <form onSubmit={handleSubmit} className={s.form}>
          <fieldset className={s.fieldset}>
            <legend><h2>장바구니 애플리케이션</h2></legend>
            <ItemHeader></ItemHeader>
            {fruits.map((f) => (
              <ItemInput
                key={f.id}
                fruit={f}
                handleCreate={handleCreate}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                isCreateMode={false}
              ></ItemInput>
            ))}
            {isCreateMode ? <ItemInput key='newFruitId' 
              fruit={{
                id: newId,
                name: '',
                price: 0,
                quantity: 0
              }} 
              handleCreate={handleCreate}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              setCreateMode={setCreateMode}
              isCreateMode={isCreateMode}
            ></ItemInput> : null}
            <SumFooter sum={sum} isCreateMode={isCreateMode} setCreateMode={setCreateMode}></SumFooter>
          </fieldset>
        </form>
      </div>
    </>
  );
}
