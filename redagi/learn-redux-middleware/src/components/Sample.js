import React from "react";

function Sample({ loadingPost, loadingUser, post, users }) {
  return (
    <div>
      <section>
        <h1>Post</h1>
        {loadingPost && "loading..."}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>Users list</h1>
        {loadingUser && "loading..."}
        {!loadingUser && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Sample;
