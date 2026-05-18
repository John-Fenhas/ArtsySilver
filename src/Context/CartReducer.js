export default function cartReducer(cartItems, action) {
  const productID = action.payload.id;
  const productOnSale = action.payload.onSale;
  const productOldPrice = action.payload.oldPrice;
  const productPrice = action.payload.price;
  // boolian for checking if the product is already in the cart
  const actionProductExist = cartItems.find((item) => item.id === productID);

  switch (action.type) {
    case "ADD_ITEM": {
      if (actionProductExist) {
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
          onSale: productOnSale,
          oldPrice: productOldPrice,
          price: productPrice,
          quantity: 1,
        },
      ];
    }
    case "REMOVE_ITEM": {
      console.log(productID);

      return cartItems.filter((item) => item.id !== productID);
    }
    case "DECREASE_ITEM": {
      if (actionProductExist.quantity >= 2) {
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
