import { useFormContext } from "react-hook-form";

const SelectField = ({
  label,
  name,
  options = [],
  placeholder = "নির্বাচন করুন",
  labelClassName = "",
  className = "",
  rules,
  ...props
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  // বর্তমান ভ্যালু ওয়াচ করে রাখা
  const fieldValue = watch(name) ?? "";

  return (
    <div className="grid gap-1">
      {label && (
        <label className={`label text-black ${labelClassName}`}>{label}</label>
      )}

      <select
        {...register(name, rules)}
        value={fieldValue} // এডিট মোডে ভ্যালু শো করার জন্য
        className={`select select-bordered w-full outline-0 ${className} ${
          errors[name] ? "border-red-500 focus:border-red-500" : ""
        }`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {errors[name] && (
        <span className="text-red-500 text-xs font-medium">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default SelectField;
