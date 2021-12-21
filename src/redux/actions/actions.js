import { ActionTypes } from "../action-types/action-types"; // El signo * significa que estoy importando todo el contenido de action-types, ya que no lo estamos guardando en una constante.

export const addHero = (products) => {
  return {
    type: ActionTypes.ADD_HERO,
    payload: products,
  };
};
