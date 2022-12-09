import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Preloader } from "../lib/PreloadContext";
import { getUser } from "../modules/users";
import User from "../components/Users";

function UserContainer({ id }) {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.id === parseInt(id, 10)) return; //when user exists, has same id, no request
    dispatch(getUser(id));
  }, [dispatch, id, user]); // when id changes, request again

  // validate container and return null case,
  //instead of null return Preloader
  if (!user) {
    return <Preloader reslove={() => dispatch(getUser(id))} />;
  }

  return <User user={user} />;
}

export default UserContainer;
