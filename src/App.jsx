import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import BreweryDetail from "./pages/BreweryDetail";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/brewery/:id" element={<BreweryDetail />} />
    </Routes>
  );
}

export default App;