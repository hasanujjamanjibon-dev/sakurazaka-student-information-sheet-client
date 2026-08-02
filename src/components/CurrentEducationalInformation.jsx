import InputField from "./common/InputField";
import YesNoField from "./common/YesNoField";
import { useFormContext } from "react-hook-form";

const CurrentEducationalInformation = () => {
  const { register, watch } = useFormContext();

  const admissionStatus = watch("currentAdmissionStatus");
  const admitOptions = [
    {
      label: "ভর্তি হয়েছি",
      value: "admitted",
    },
    {
      label: "ভর্তি হইনি",
      value: "not_admitted",
    },
    {
      label: "ভর্তি হবো",
      value: "will_admit",
    },
  ];
  return (
    <section className="w-full rounded-xl border border-violet-800 bg-white shadow-sm overflow-hidden ">
      {/* Header */}
      <div className="bg-violet-800 px-4 py-3">
        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
          ৫. বর্তমান পড়াশুনার ইনফরমেশন{" "}
          <span className="font-semibold">(Educational Information)</span>
        </h2>
      </div>
      <div className="px-4 py-3 flex gap-4">
        {admitOptions.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="admit"
              value={option.value}
              {...register("currentAdmissionStatus")}
              className="h-5 w-5 accent-black"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      <hr className="border-violet-800 border" />
      {admissionStatus !== "not_admitted" && (
        <div className="px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="বর্তমান স্কুল/কলেজ/বিশ্ববিদ্যালয়ের নাম"
            type="text"
            name="currentUniversityName"
            placeholder="ইংরেজি নাম লিখতে হবে"
          />
          <InputField
            label="যে ডিপার্টমেন্ট এ পড়েন"
            type="text"
            name="currentDepartment"
            placeholder="Accounting, Economics, Chemistry, Physics, etc."
          />
          <InputField
            label="কোর্সের নাম"
            type="text"
            name="currentCourse"
            placeholder="CSE, EEE, BBA, BSc, BSS etc. লিখতে হবে"
          />
          <InputField
            label="যে বর্ষে/সেমিস্টারে পড়েন"
            type="text"
            name="currentSemester"
            placeholder="1st Year/ 1st Semester etc."
          />
          <InputField
            label="ক্লাস রোল/আইডি নং"
            type="text"
            name="currentRoll"
            placeholder="কলেজ আইডি অনুযায়ী লিখতে হবে"
          />
          <InputField
            label="রেজিষ্ট্রেশন নং"
            type="text"
            name="currentRegistration"
            placeholder="কলেজ আইডি অনুযায়ী লিখতে হবে (যদি থাকে)"
          />
        </div>
      )}
    </section>
  );
};

export default CurrentEducationalInformation;
