import { Navbar } from "./components/navbar/navbar";
import { Login } from "./components/login/login";
import { Home } from "./components/home/home";
import { Character } from "./components/character/character";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
