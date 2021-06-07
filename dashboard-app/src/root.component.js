import React from "react";
import { auth, login } from "@faramin/auth";

export default function Root(props) {
  return "Dashboard page, welcome " + auth.value.username;
  // return <section>{props.name} is mounted!</section>;
}
