import { Login } from "./components/login/login";
import { Home } from "./components/home/home";
import { Search } from "./components/search/search";
import { Character } from "./components/character/character";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StatsProvider } from "./components/context/statsContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <StatsProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/character/:id" element={<Character />} />
          </Routes>
        </StatsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
