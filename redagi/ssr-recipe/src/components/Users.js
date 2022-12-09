import React from "react";
import { Link } from "react-router-dom";

function Users({ users }) {
  if (!users) return null; // if users are not vaild, return nothing

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
