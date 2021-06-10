import React from "react";
import { Button as Btn } from "@material-ui/core";

const Button = (props) => {
  return <Btn onClick={props.onClick}>{props.children}</Btn>;
};

export default Button;
