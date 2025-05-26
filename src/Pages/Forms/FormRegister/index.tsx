import { useEffect, useState } from "react";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import styles from "./styles.module.css";
import astronautaDecolando from "../../../assets/to-the-stars-animate.svg";
import { NavLink } from "react-router";
type User = {
  id: number;
  username: string;
  password: string;
};
export default function FormRegister() {
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
          Cadastre-se <br />E entre para nosso time
        </h1>
        <img src={astronautaDecolando} alt="Austronauta animacao" />
      </div>
      <div className={styles.rightLogin}>
        <div className={styles.cardLogin}>
          <h2>Cadastre-se</h2>
          <Input
            label="Email"
            type="text"
            name="email"
            placeholder="Digite seu email"
          />
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
          <Button label="Login" />
          <p>
            Já tem uma conta?{" "}
            <strong>
              <NavLink to="/">Faça login</NavLink>
            </strong>
          </p>
        </div>
      </div>
    </main>
  );
}
