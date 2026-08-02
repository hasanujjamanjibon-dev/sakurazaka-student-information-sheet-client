import { useFormContext } from "react-hook-form";

const InputField = ({
  label,
  type = "text",
  placeholder,
  name,
  labelClassName,
  className = "",
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <div className="grid gap-1">
      <label className={`label text-black ${labelClassName}`}>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`input outline-0 w-full ${className}`}
        onWheel={(e) => e.target.blur()}
        {...props}
      />
    </div>
  );
};

export default InputField;
