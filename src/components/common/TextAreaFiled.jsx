import { useFormContext } from "react-hook-form";

const TextAreaFiled = ({
  label,
  placeholder,
  name,
  rows = 4,
  labelClassName,
  className = "",
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <div className="grid gap-1">
      <label className={`label text-black ${labelClassName}`}>{label}</label>

      <textarea
        rows={rows}
        placeholder={placeholder}
        {...register(name)}
        className={`textarea textarea-bordered outline-0 w-full resize-none ${className}`}
        {...props}
      />
    </div>
  );
};

export default TextAreaFiled;
