import { Route, Routes } from "react-router";
import { Home } from "./pages/home";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
