import React from "react";
import UsersContainer from "../containers/UsersContainer";
import UserContainer from "../containers/UserContainer";
import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";

function UsersPage() {
  return (
    <>
      <UsersContainer />
      <Routes>
        <Route
          path="/users/:id"
          render={({ match }) => <UserContainer id={match.params.id} />}
          exact
        />
      </Routes>
    </>
  );
}

export default UsersPage;
