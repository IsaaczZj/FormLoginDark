type ButtonProps = React.ComponentProps<"button"> & {
  label: string;
};

export default function Button({ label, ...props }: ButtonProps) {
  return <button className="btn-login">{label}</button>;
}
