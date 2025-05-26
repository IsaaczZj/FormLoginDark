import { use, useEffect, useState } from "react";
import CardUser from "../../Components/CardUser";
import styles from "./styles.module.css";
import type { User } from "../../Types/user";
import Button from "../../Components/Button";
import { useNavigate } from "react-router";
export default function Users() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getUsers() {
      try {
        const response = await fetch("http://localhost:3000/users");
        const json = await response.json();
        setUsers(json);
      } catch (error) {
        console.log("Erro ao carregar usuários ", error);
        setLoading(false);
        setUsers(null);
      } finally {
        setLoading(false);
      }
    }
    getUsers();
  }, []);

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <h1>Usuarios</h1>
      {loading && <p>Carregando...</p>}
      <div className={styles.userList}>
        {users?.map((user) => (
          <CardUser key={user.user} email={user.email} user={user.user} />
        ))}
        <Button label="sair" onClick={handleLogout} />
      </div>
    </div>
  );
}
