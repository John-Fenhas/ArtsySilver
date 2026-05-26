import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import cartReducer from "./CartReducer";
import { getProducts } from "../data/products";
import { useQuery } from "@tanstack/react-query";

const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem("cart")) || [];
export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return;
  }

  function handleCartView() {
    setIsCartOpen(!isCartOpen);
  }

  function addToCart(id, quantity) {
    const product = products.find((product) => product.id === id);

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: id,
        quantity: quantity,
        onSale: product.is_on_sale,
        oldPrice: product.old_price_in_cents,
        price: product.price_in_cents,
        inStock: product.in_stock,
      },
    });
  }

  function decreaseItem(id, quantity) {
    dispatch({
      type: "DECREASE_ITEM",
      payload: {
        id: id,
        quantity: quantity,
      },
    });
  }

  function removeFromCart(id) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: {
        id: id,
      },
    });
  }

  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
    });
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        handleCartView,
        addToCart,
        decreaseItem,
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
