import { useEffect, useState } from "react";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import styles from "./styles.module.css";
import astronauta from "../../../assets/innovation-animate.svg";
import { NavLink } from "react-router";
type User = {
  id: number;
  username: string;
  password: string;
};
export default function FormLogin() {
  return (
    <form className={styles.form}>
      <div className={styles.leftLogin}>
        <h1>
          Faça login <br />
          Bem-vindo
        </h1>
        <img src={astronauta} alt="Austronauta animacao" />
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
          <Button label="Login" />
          <p>
            Não tem uma conta?{" "}
            <strong>
              <NavLink to="/register">Cadastre-se</NavLink>
            </strong>
          </p>
        </div>
      </div>
    </form>
  );
}
