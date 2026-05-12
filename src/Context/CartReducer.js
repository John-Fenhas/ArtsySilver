export default function cartReducer(cartItems, action) {
  const productID = action.payload;
  const actionProduct = cartItems.find((item) => item.id === productID);
  switch (action.type) {
    case "ADD_ITEM": {
      if (actionProduct) {
        return cartItems.map((item) =>
          item.id === productID
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [
        ...cartItems,
        {
          id: productID,
          quantity: 1,
        },
      ];
    }
    case "REMOVE_ITEM": {
      if (actionProduct.quantity >= 2) {
        return cartItems.map((item) =>
          item.id === productID
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
      return cartItems.filter((item) => item.id !== productID);
    }
    case "CLEAR_CART": {
      return [];
    }
    default:
      return cartItems;
  }
}
