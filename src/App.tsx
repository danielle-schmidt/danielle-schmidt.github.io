import { Route, Routes } from "react-router";
import { Home } from "./pages/home";

import "./App.css";
import { Research } from "./pages/research";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="research" element={<Research />} />
    </Routes>
  );
}

export default App;
