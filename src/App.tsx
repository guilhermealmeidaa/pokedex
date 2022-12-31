import "./App.css";
import { Home } from "./pages/Home";
import { PokemonPage } from "./pages/PokemonPage/PokemonPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundColor: "#1E1E1E" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PokemonPage/:id" element={<PokemonPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
