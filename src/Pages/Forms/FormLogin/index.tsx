import { useEffect, useState } from "react";

type User = {
  id: number;
  username: string;
  password: string;
};
export default function FormLogin() {
  // const [user, setUser] = useState({

  //   id: Math.random(),
  //   username: "Carlos",
  //   password: "123",
  // });
  // useEffect(() => {
  //   async function createUser(user:User) {
  //     const response = await fetch("http://localhost:3000/users", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     });
  //   }
  //   createUser(user)
  // }, []);

  return (
    <form>
      <h1>Faça seu Login</h1>
    </form>
  );
}
