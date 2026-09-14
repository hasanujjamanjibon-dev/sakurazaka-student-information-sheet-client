import { useFormContext } from "react-hook-form";

const InputField = ({
  label,
  type = "text",
  placeholder,
  name,
  labelClassName,
  className = "",
  rules, // ১. rules আলাদা করে রিসিভ করা হয়েছে
  ...props
}) => {
  const {
    register,
    formState: { errors }, // ২. errors নেওয়া হয়েছে
  } = useFormContext();

  return (
    <div className="grid gap-1">
      <label className={`label text-black ${labelClassName}`}>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)} // ৩. register-এ rules পাস করা হয়েছে
        className={`input outline-0 w-full ${className} ${
          errors[name] ? "border-red-500" : ""
        }`}
        onWheel={(e) => e.target.blur()}
        {...props}
      />

      {/* ৪. এরর মেসেজ প্রদর্শনের জন্য */}
      {errors[name] && (
        <span className="text-red-500 text-xs font-medium">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default InputField;
