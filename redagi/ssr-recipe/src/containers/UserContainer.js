import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Preloader, usePreloader } from "../lib/PreloadContext";
import { getUser } from "../modules/users";
import User from "../components/User";
import { useParams } from "react-router-dom";

function UserContainer() {
  const params = useParams();
  // console.log("userContainer checing params", params);
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  usePreloader(() => dispatch(getUser(params.id))); //api call when serverside rendering

  useEffect(() => {
    if (user && user.id === parseInt(params.id, 10)) return; //when user exists, has same id, no request
    dispatch(getUser(params.id));
  }, [dispatch, params, user]); // when id changes, request again

  // validate container and return null case,
  //instead of null return Preloader
  // if (!user) {
  //   return <Preloader reslove={() => dispatch(getUser(params.id))} />;
  // }

  if (!user) return null;
  return <User user={user} />;
}

export default UserContainer;
