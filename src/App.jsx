import { Login } from "./components/login/login";
import { Home } from "./components/home/home";
import { Search } from "./components/search/search";
import { Character } from "./components/character/character";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/character/:id" element={<Character />} />
          <Route
            path="*"
            element={<Navigate to="/home" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
