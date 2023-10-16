import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  //Initialize the use selector for global state
  const { currentUser } = useSelector((state) => state.user);
  //Use outlet to call the children of private route
  //if the is user show the child route otherwise navigate to sign-in
  //NVIGATE is a component
  return  currentUser ? <Outlet/> : <Navigate to="/sign-in" />;
  

};

export default PrivateRoute;
