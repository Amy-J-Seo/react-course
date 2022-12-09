import "./App.css";
import { Route, Routes } from "react-router-dom";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} exact>
        <Route path="/red" element={<RedPage />} exact />
        <Route path="/blue" element={<BluePage />} exact />
      </Route>
    </Routes>
  );
};

export default App;
