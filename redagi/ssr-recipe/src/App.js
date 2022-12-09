import "./App.css";
import { Route, Routes } from "react-router-dom";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";
import Layout from "./pages/Layout";
import UsersPage from "./pages/UsersPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} exact>
        <Route path="/red" element={<RedPage />} exact />
        <Route path="/blue" element={<BluePage />} exact />
        <Route path="/users" element={<UsersPage />} exact />
      </Route>
    </Routes>
  );
};

export default App;
