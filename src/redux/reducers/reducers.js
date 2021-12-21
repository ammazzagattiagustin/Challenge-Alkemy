const Reducer = (cart = [], action) => {
  if (action.type === "ADD") {
    let tempcart = cart.filter((item) => item.id === action.payload.id);
    if (tempcart < 1) {
      return [...cart, action.payload];
    } else {
      return cart;
    }
  }
  return cart;
};
export default Reducer;

/* import { ActionTypes } from "../action-types/action-types"; 
const initialState = {
  products: [],
};

const heroReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_HERO:
      let tempcart = state.products.filter(
        (product) => product.id === payload.id
      );
      if (tempcart < 1) {
        return [...state, payload];
      } else {
        return state;
      }
   
    default:
      return state;
  }
};

export default heroReducer;
 */
