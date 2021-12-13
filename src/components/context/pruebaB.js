import { useContext } from "react";
import { AppContext } from "../context/context";

export const PruebaB = () => {
  const [state, setState] = useContext(AppContext);
  return <p>{state.name}</p>;
};
