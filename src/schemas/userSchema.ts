import * as yup from "yup";
import type { UserRegister } from "../Types/user";

export const userSchema = yup.object({
  email: yup.string().required("Email é obrigatório"),
  user: yup
    .string()
    .required("Digite um nome")
    .min(4, "Usuário deve ter pelo menos 4 caractertes"),
  password: yup
    .string()
    .required("Digite uma senha")
    .min(6, "A senha deve ter no minimo 6 caracteres"),
});
