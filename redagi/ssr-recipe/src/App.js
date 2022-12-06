import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} exact>
        <Route path="/red" element={<RedPage />} exact />
        <Route path="/blue" element={<BluePage />} exact />
      </Route>
    </Routes>
  );
}

export default App;
