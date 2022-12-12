import React, { useEffect } from "react";
import UsersContainer from "../containers/UsersContainer";
import UserContainer from "../containers/UserContainer";
import { Route, Routes, useParams, useLocation } from "react-router-dom";

function UsersPage() {
  const params = useParams();

  useEffect(() => {}, []);

  return (
    <>
      <UsersContainer />
      <Routes>
        <Route
          path="/users/:id"
          element={<UserContainer id={params.id} />}
          exact
        />
      </Routes>
    </>
  );
}

export default UsersPage;
