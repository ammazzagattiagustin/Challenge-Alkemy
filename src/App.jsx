import { Navbar } from "./components/navbar/navbar";
import { Login } from "./components/login/login";
import { Home } from "./components/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Character } from "./components/character/character";
import { Provider } from "./components/context/context";
import { PruebaA } from "./components/context/pruebaA";
import { PruebaB } from "./components/context/pruebaB";

/* import { Email, Password } from "./pages/singUp";
import { Axios } from "axios";
import {
  setToken,
  setCurrentUser,
  getToken,
  getUserName,
  deleteToken,
} from "./components/helpers/auth-helpers"; */

function App() {
  /*   async function login(email, password) {
    const { data } = await Axios.post("http://challenge-react.alkemy.org/", {
      email,
      password,
    });
    console.log(data);
    setToken(data.id);
    setCurrentUser(data.name);
  } */
  return (
    <>
      <Provider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/character/:id" element={<Character />} />
          </Routes>
          <PruebaA />
          <PruebaB />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
