import { useFormContext } from "react-hook-form";

const TextAreaFiled = ({
  label,
  placeholder,
  name,
  rows = 4,
  labelClassName,
  className = "",
  rules, // ১. rules প্রপস হিসেবে রিসিভ করা হয়েছে
  ...props
}) => {
  const {
    register,
    formState: { errors }, // ২. errors বের করে আনা হয়েছে
  } = useFormContext();

  return (
    <div className="grid gap-1">
      <label className={`label text-black ${labelClassName}`}>{label}</label>

      <textarea
        rows={rows}
        placeholder={placeholder}
        {...register(name, rules)} // ৩. register-এ rules পাস করা হয়েছে
        className={`textarea textarea-bordered capitalize outline-0 w-full resize-none ${className} ${
          errors[name] ? "border-red-500 focus:border-red-500" : ""
        }`}
        {...props}
      />

      {/* ৪. এরর মেসেজ দেখানোর জন্য */}
      {errors[name] && (
        <span className="text-red-500 text-xs font-medium">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextAreaFiled;
