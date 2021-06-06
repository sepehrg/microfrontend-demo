import React from "react";
import { Link } from "@reach/router";

export default function Root(props) {
  return (
    <>
      <Link to="/">home</Link> | <Link to="/dashboard">dashboard</Link>
    </>
  );
}
