import { createContext, useContext, useReducer, useEffect } from "react";
import cartReducer from "./CartReducer";

const CartContext = createContext();

const initialState = [];
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  function addToCart(id) {
    dispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function removeFromCart(id) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  }
  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
      payload: id,
    });
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
