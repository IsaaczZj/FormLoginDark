type InputProps = React.ComponentProps<"input"> & {
  label: string;
};

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="textfield">
      <label htmlFor={label}>{label}</label>
      <input {...props}/>
    </div>
  );
}
