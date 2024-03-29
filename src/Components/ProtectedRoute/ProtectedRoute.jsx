import React from "react";
import "./ProtectedRoute.module.css";
import { Navigate } from "react-router-dom";

export default function ProductedRoute(props) {
  if (localStorage.getItem("userToken")) {
    return props.children;
  } else {
    return <Navigate to={"/login"} />;
  }
}
