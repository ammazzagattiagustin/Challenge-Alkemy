const Reducer = (cart = [], action) => {
  if (action.type === "ADD") {
    let tempcart = cart.filter((item) => item.id === action.payload.id);
    if (tempcart < 1) {
      return [...cart, action.payload];
    } else {
      return cart;
    }
  }
  if (action.type === "REMOVE") {
    return cart.filter((item) => item.id !== action.payload.id); // filter de todos los items que no tengan el ID que suprimis y listo
  }
  if (action.type === "POWERSTATS") {
    return {
      ...cart,
      powerstats: {
        intelligence:
          cart.powerstats.intelligence + Number(action.payload.intelligence),
        strength: cart.powerstats.strength + Number(action.payload.strength),
        speed: cart.powerstats.speed + Number(action.payload.speed),
        power: cart.powerstats.power + Number(action.payload.power),
        durability:
          cart.powerstats.durability + Number(action.payload.durability),
        combat: cart.powerstats.combat + Number(action.payload.combat),
      },
    };
  }
};

export default Reducer;
