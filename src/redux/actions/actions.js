import * as actionTypes from "../action-types/action-types"; // El signo * significa que estoy importando todo el contenido de action-types, ya que no lo estamos guardando en una constante.

export const addHero = (itemID) => {
  return {
    type: actionTypes.ADD_HERO,
    payload: {
      id: itemID,
    },
  };
};
