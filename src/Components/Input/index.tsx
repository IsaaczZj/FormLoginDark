import styles from './styles.module.css'

type InputProps = React.ComponentProps<"input"> & {
  label: string;
};

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={label}>{label}</label>
      <input className={styles.input} {...props}/>
    </div>
  );
}
