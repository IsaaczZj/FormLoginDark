export type UserRegister = {
  email: string;
  user: string;
  password: string;
};

export type UserLogin = Omit<UserRegister, "email">;
export type User = Omit<UserRegister, "password">;
