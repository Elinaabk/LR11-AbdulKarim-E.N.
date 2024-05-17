import './App.css';
import PizzaCard from "./components/PizzaCard"
import img1 from './images/pizza.jpg';

import { useState } from 'react';

const App = () => {
  const [quantity, setQuantity] = useState(1);
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = () => {
    alert('Количество заказанного товара:${quantity}');
  };

  return (
    <main class="main">
      <div className="container">
          <div className="main_block">
            <div className="blocks"><PizzaCard img={img1} title = "Пепперони" text="Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла"/></div>
          </div>
          <div>
            <select className="diam" id="">
              <option value="" >Диаметр</option>
              <option value="" >10</option>
              <option value="" >25</option>
              <option value="">40</option>
            </select>
          </div>
        <div className="blocks"> <PizzaCard title = "от 550₽"/></div>
      </div>
      <div className="quantity">
        <button onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrease}>+</button>
        <button className="add_cart" onClick={handleAddToCart}>
          В корзину
        </button>
      </div>
    </main>
  );
}

export default App;