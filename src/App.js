import "./App.scss";
import { Navbar } from "./components/navbar/navbar";
import { Login } from "./components/login/login";
import { Home } from "./components/home/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Email, Password } from "./pages/singUp";
import { Axios } from "axios";
import {
  setToken,
  setCurrentUser,
  getToken,
  getUserName,
  deleteToken,
} from "./components/helpers/auth-helpers";

function App() {
  async function login(email, password) {
    const { data } = await Axios.post("http://challenge-react.alkemy.org/", {
      email,
      password,
    });
    console.log(data);
    setToken(data.id);
    setCurrentUser(data.name);
  }

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home/:heroId">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
