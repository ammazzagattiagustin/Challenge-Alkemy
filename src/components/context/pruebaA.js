import { useContext } from "react";
import { AppContext } from "../context/context";

export const PruebaA = () => {
  const [state, setState] = useContext(AppContext);

  return (
    <input
      type="text"
      onChange={(e) => {
        setState({ ...state, name: e.target.value });
      }}
    />
  );
};
