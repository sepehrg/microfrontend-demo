import React from "react";
import { Input as Inp } from "@material-ui/core";

const Input = (props) => {
  return <Inp type="text" value={props.value}></Inp>;
};

export default Input;
