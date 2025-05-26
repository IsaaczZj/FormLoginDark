import styles from './styles.module.css'

type ButtonProps = React.ComponentProps<"button"> & {
  label: string;
};

export default function Button({ label,onClick, ...props }: ButtonProps) {
  return <button onClick={onClick} className={styles.btnLogin}>{label}</button>;
}
