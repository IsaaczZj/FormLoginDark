import styles from './styles.module.css'

type ButtonProps = React.ComponentProps<"button"> & {
  label: string;
};

export default function Button({ label, ...props }: ButtonProps) {
  return <button className={styles.btnLogin}>{label}</button>;
}
