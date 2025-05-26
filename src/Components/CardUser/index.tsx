import type { User } from "../../Types/user";
import styles from './styles.module.css'
export default function CardUser({email,user}:User){
  return(
    <div className={styles.userCard}>
      <h3>{user}</h3>
      <p>{email}</p>
    </div>
  )
}
