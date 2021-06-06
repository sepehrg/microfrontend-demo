import React from "react";
import { Button } from "@faramin/styleguide";

export default function Root(props) {
  console.log(props)
  return (
    <>
      <section>{props.name} is mounted!</section>
      <Button>My button</Button>
    </>
  );
}
