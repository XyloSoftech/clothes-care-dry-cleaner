const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const isAlreadyInCart = state.cartItems.some(
        (item) => item.item === action.payload.item
      );
      if (!isAlreadyInCart) {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      } else {
        return state;
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
