import React from "react";

function User({ user }) {
  const { email, name, username } = user;

  return (
    <div
      style={{ height: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <h1>
        {username} ({name})
      </h1>
      <p>
        <b>e-mail:</b>
        {email}
      </p>
    </div>
  );
}

export default User;
