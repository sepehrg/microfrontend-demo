import React from "react";
import { Button as Btn } from "antd";

const Button = (props) => {
  return <Btn onClick={props.onClick}>{props.children}</Btn>;
};

export default Button;
