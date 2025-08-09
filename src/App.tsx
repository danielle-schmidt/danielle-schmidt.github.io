import { Route, Routes } from "react-router";
import { Home } from "./pages/home";

import "./App.css";
import { Research } from "./pages/research";
import { Teaching } from "./pages/teaching";
import { Outreach } from "./pages/outreach";
import { Resources } from "./pages/resources";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="research" element={<Research />} />
      <Route path="teaching" element={<Teaching />} />
      <Route path="outreach" element={<Outreach />} />
      <Route path="resources" element={<Resources />} />
    </Routes>
  );
}

export default App;
