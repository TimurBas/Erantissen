import { createContext, useState } from "react";

const [count, setCount] = useState(0);

const updateBasketCounter = () => {
  setCount(count + 1);
};

const CartContext = createContext(count);

export default CartContext;
