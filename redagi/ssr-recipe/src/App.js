import "./App.css";
import { Route, Routes } from "react-router-dom";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";
import Layout from "./pages/Layout";
import UsersPage from "./pages/UsersPage";
import UserContainer from "./containers/UserContainer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} exact>
          <Route path="/red" element={<RedPage />} exact />
          <Route path="/blue" element={<BluePage />} exact />
          <Route path="/users" element={<UsersPage />} exact>
            <Route path="/users/:id" element={<UserContainer />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
