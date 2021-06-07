import React, { useEffect, useState } from "react";
import { Button, Input } from "@faramin/styleguide";
import { auth, login, logout } from "@faramin/auth";

export default function Root(props) {
  const [session, setSesstion] = useState("");

  useEffect(() => {
    auth.subscribe(({ username }) => setSesstion(username));
  }, []);

  return (
    <>
      <section>
        {props.name} is mounted! , welcome: {session}{" "}
      </section>
      <Button onClick={() => login("user", "pass")}>login</Button>
      <Button onClick={() => logout()}>logout</Button>
      <Input></Input>
    </>
  );
}
