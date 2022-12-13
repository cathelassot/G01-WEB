import React, { useState } from "react";
import Card from "./Card";
import Gap from "./Gap";
import Input from "./forms/Input";
import Button from "./forms/button";

export default function Login() {

  const [user, setUser] = useState("");
  const [password, setpassword] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    const data = {
      user,
      password
    };

    console.log(data);

      const res = await fetch("http://localhost:8080/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( data ),
    });

    if (res.ok) {
      const jsonRes = await res.json();
      alert(jsonRes.message);
    } else {
      alert(res.status);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Card padding="2rem" flexDirection="column" borderRadius="0.5rem">
        <h1>Login</h1>
        <Gap>2rem</Gap>
        <Input onChange={(v) => setUser(v.target.value)}>User name</Input>
        <Gap>0.5rem</Gap>
        <Input
          type="password"
          value={password}
          onChange={(v) => setpassword(v.target.value)}
        >
          Contraseña
        </Input>
        <Gap>1rem</Gap>
        <Button type="submit">
          <b>Ingresar</b>
        </Button>
      </Card>
    </form>
  );
}
