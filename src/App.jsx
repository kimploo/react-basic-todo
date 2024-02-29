import s from "./App.module.css";
import ItemHeader from "./components/ItemHeader";
import ItemInput from "./components/ItemInput";
import SumFooter from "./components/SumFooter";
import { useEffect, useState } from "react";
import { deleteFruitAPI } from "./features/fruit/api/deleteOneFruit.mjs";
import { updateOneFruitAPI } from "./features/fruit/api/updateOneFruit.mjs";
import { useDispatch, useSelector } from "react-redux";
import { getAllFruitsAPI } from "./features/fruit/api/getAllFruits.mjs";
import { createFruitAPI } from "./features/fruit/api/createOneFruit.mjs";

export default function App() {
  const newId = String(Math.trunc(Math.random() * 9995) + 5)
  const [isCreateMode, setCreateMode] = useState(false);
  const { fruits } = useSelector((state) => state.fruit);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllFruitsAPI())
  }, [dispatch])
  
  const sum = fruits.reduce((a, b) => a + (b.price * b.quantity), 0)
  
  const handleNewFruit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const _name = formData.get(`nameInput_${newId}`)
    const _price = formData.get(`priceInput_${newId}`)
    const _quantity = formData.get(`quantityInput_${newId}`)
    const newFruit = {
      id: newId,
      name: _name,
      price: Number(_price),
      quantity: Number(_quantity)
    }
    dispatch(createFruitAPI(newFruit))
      .then(() => dispatch(getAllFruitsAPI()))
    setCreateMode(false);
  }

  const handleEdit = (newFruit) => {
    const { id } = newFruit
    dispatch(updateOneFruitAPI({ id, fruit: newFruit }))
    .then(() => dispatch(getAllFruitsAPI()))
  };
  
  const handleEditQuantity = (newFruit) => {
    const { id } = newFruit
    dispatch(updateOneFruitAPI({ id, fruit: newFruit }))
    .then(() => dispatch(getAllFruitsAPI()))
  };

  const handleDelete = (id) => {
    dispatch(deleteFruitAPI(id))
    .then(() => dispatch(getAllFruitsAPI()))
  };

  return (
    <>
      <div className={s.appContainer}>
        <form onSubmit={handleNewFruit} className={s.form}>
          <div className={s.fieldset}>
            <h2>장바구니 애플리케이션</h2>
            <ItemHeader></ItemHeader>
            {fruits.map((f) => (
              <ItemInput
                key={f.id}
                fruit={f}
                handleEdit={handleEdit}
                handleEditQuantity={handleEditQuantity}
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
              handleEdit={handleEdit}
              handleEditQuantity={handleEditQuantity}
              handleDelete={handleDelete}
              setCreateMode={setCreateMode}
              isCreateMode={isCreateMode}
            ></ItemInput> : null}
            <SumFooter sum={sum} isCreateMode={isCreateMode} setCreateMode={setCreateMode}></SumFooter>
          </div>
        </form>
      </div>
    </>
  );
}
