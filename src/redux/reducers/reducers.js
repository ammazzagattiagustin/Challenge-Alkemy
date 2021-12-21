import { ActionTypes } from "../action-types/action-types"; // El signo * significa que estoy importando todo el contenido de action-types, ya que no lo estamos guardando en una constante.

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
    /* return { ...state, products: payload }; */
    default:
      return state;
  }
};

export default heroReducer;
