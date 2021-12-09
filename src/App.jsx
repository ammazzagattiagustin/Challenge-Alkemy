import { Navbar } from "./components/navbar/navbar";
import { Login } from "./components/login/login";
import { Home } from "./components/home/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Character } from "./components/character/character";
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
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/character/:id">
            <Character />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
