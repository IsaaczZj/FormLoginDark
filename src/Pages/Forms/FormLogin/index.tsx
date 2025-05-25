import { useEffect, useState } from "react";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import styles from './styles.module.css'

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
    <main className={styles.main}>
      <div className={styles.leftLogin}>
        <h1>
          Faça login <br />E entre para nosso time
        </h1>
      </div>
      <div className={styles.rightLogin}>
        <div className={styles.cardLogin}>
          <h2>Login</h2>
          <Input
            label="Usuário"
            type="text"
            name="user"
            placeholder="Usuário"
          />
          <Input
            label="Senha"
            type="password"
            name="user"
            placeholder="Senha"
          />
          <Button label="Login"/>
        </div>
      </div>
    </main>
  );
}
