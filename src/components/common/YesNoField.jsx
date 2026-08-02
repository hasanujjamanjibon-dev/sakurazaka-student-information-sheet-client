import { useFormContext } from "react-hook-form";

const YesNoField = ({ label, englishLabel, name, required = false }) => {
  const { register } = useFormContext();

  return (
    <div className="flex items-center gap-4">
      <label className="text-base font-semibold text-black">
        {label}
        {englishLabel && (
          <span className="uppercase text-sm font-bold block">
            ({englishLabel})
          </span>
        )}
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          value="Yes"
          {...register(name, { required })}
          className="h-5 w-5 accent-black"
        />
        <span>হ্যাঁ</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          value="No"
          {...register(name, { required })}
          className="h-5 w-5 accent-black"
        />
        <span>না</span>
      </label>
    </div>
  );
};

export default YesNoField;
