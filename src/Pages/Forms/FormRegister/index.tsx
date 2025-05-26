import { useEffect, useState } from "react";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import styles from "./styles.module.css";
import astronautaDecolando from "../../../assets/to-the-stars-animate.svg";
import { NavLink } from "react-router";
import { Controller, useForm } from "react-hook-form";
import type { UserRegister } from "../../../Types/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../../schemas/userSchema";
import { toast, ToastContainer } from "react-toastify";

export default function FormRegister() {
  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm<UserRegister>({
    resolver: yupResolver(userSchema),
  });

  async function onSubmit(data: UserRegister) {
    try {
      const newUser: UserRegister = {
        email: data.email,
        user: data.user,
        password: data.password,
      };
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: Date.now(), ...newUser }),
      });
      if (response.ok) {
        toast.success("Usuário criado com sucesso");
      }
    } catch (error) {
      toast.error("Erro ao criar o usuário");
    }
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.leftLogin}>
        <h1>
          Cadastre-se <br />E entre para nosso time
        </h1>
        <img src={astronautaDecolando} alt="Austronauta animacao" />
      </div>
      <div className={styles.rightLogin}>
        <div className={styles.cardLogin}>
          <h2>Cadastre-se</h2>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                label="Email"
                type="email"
                placeholder="Digite seu email"
                {...field}
              />
            )}
          />
          {errors.email && <small>{errors.email.message}</small>}

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
            Já tem uma conta?{" "}
            <strong>
              <NavLink to="/">Faça login</NavLink>
            </strong>
          </p>
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored" />
    </form>
  );
}
