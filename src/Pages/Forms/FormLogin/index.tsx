import { use, useEffect, useState } from "react";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import styles from "./styles.module.css";
import astronauta from "../../../assets/innovation-animate.svg";
import { NavLink, useNavigate } from "react-router";
import { Controller, useForm } from "react-hook-form";
import type { User, UserLogin } from "../../../Types/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginSchema } from "../../../schemas/userSchema";
import { toast, ToastContainer } from "react-toastify";

export default function FormLogin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({ resolver: yupResolver(userLoginSchema) });
  async function loginUser({ user, password }: UserLogin) {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/users?user=${user}&password=${password}`
      );
      const users: UserLogin[] = await response.json();

      if (users.length > 0) {
        const user = users[0];
        toast.success(`Bem vindo ${user.user}`);
        setTimeout(() => {
          navigate("/users");
        }, 1000);
      } else {
        toast.error("Usuário ou senha incorretos");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error ao conectar no servidor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(loginUser)} className={styles.form}>
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
          <Controller
            name="user"
            control={control}
            render={({ field }) => (
              <Input
                label="Usuário"
                type="text"
                placeholder="Usuário"
                {...field}
              />
            )}
          />
          {errors.user && <small>{errors.user.message}</small>}
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                label="Senha"
                type="password"
                placeholder="Senha"
                {...field}
              />
            )}
          />
          {errors.password && <small>{errors.password.message}</small>}

          <Button label="Login" />
          <p>
            Não tem uma conta?{" "}
            <strong>
              <NavLink to="/register">Cadastre-se</NavLink>
            </strong>
          </p>
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored" />
    </form>
  );
}
