// import InputField from "./common/InputField";
// import YesNoField from "./common/YesNoField";
// import { useFormContext } from "react-hook-form";

// const CurrentEducationalInformation = () => {
//   const { register, watch } = useFormContext();

//   const admissionStatus = watch("currentAdmissionStatus");
//   const admitOptions = [
//     {
//       label: "ভর্তি হয়েছি",
//       value: "admitted",
//     },
//     {
//       label: "ভর্তি হইনি",
//       value: "not_admitted",
//     },
//     {
//       label: "ভর্তি হবো",
//       value: "will_admit",
//     },
//   ];
//   return (
//     <section className="w-full rounded-xl border border-violet-800 bg-white shadow-sm overflow-hidden">
//       {/* Header */}
//       <div className="bg-violet-800 px-4 py-3 ">
//         <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
//           ৫. বর্তমান পড়াশুনার ইনফরমেশন{" "}
//           <span className="font-semibold">(Educational Information)</span>
//         </h2>
//       </div>
//       <div className="px-4 py-3 flex gap-4">
//         {admitOptions.map((option) => (
//           <label
//             key={option.value}
//             className="flex items-center gap-2 cursor-pointer"
//           >
//             <input
//               type="radio"
//               name="admit"
//               value={option.value}
//               {...register("currentAdmissionStatus")}
//               className="h-5 w-5 accent-black"
//             />
//             <span>{option.label}</span>
//           </label>
//         ))}
//       </div>
//       <hr className="border-violet-800 border" />
//       {admissionStatus !== "not_admitted" && (
//         <div className="px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-4">
//           <InputField
//             label="বর্তমান স্কুল/কলেজ/বিশ্ববিদ্যালয়ের নাম"
//             type="text"
//             name="currentUniversityName"
//             placeholder="ইংরেজি নাম লিখতে হবে"
//           />
//           <InputField
//             label="যে ডিপার্টমেন্ট এ পড়েন"
//             type="text"
//             name="currentDepartment"
//             placeholder="Accounting, Economics, Chemistry, Physics, etc."
//           />
//           <InputField
//             label="কোর্সের নাম"
//             type="text"
//             name="currentCourse"
//             placeholder="CSE, EEE, BBA, BSc, BSS etc. লিখতে হবে"
//           />
//           <InputField
//             label="যে বর্ষে/সেমিস্টারে পড়েন"
//             type="text"
//             name="currentSemester"
//             placeholder="1st Year/ 1st Semester etc."
//           />
//           <InputField
//             label="ক্লাস রোল/আইডি নং"
//             type="text"
//             name="currentRoll"
//             placeholder="কলেজ আইডি অনুযায়ী লিখতে হবে"
//           />
//           <InputField
//             label="রেজিষ্ট্রেশন নং"
//             type="text"
//             name="currentRegistration"
//             placeholder="কলেজ আইডি অনুযায়ী লিখতে হবে (যদি থাকে)"
//           />
//         </div>
//       )}
//     </section>
//   );
// };

// export default CurrentEducationalInformation;
import InputField from "./common/InputField";
import { useFormContext } from "react-hook-form";

const CurrentEducationalInformation = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const admissionStatus = watch("currentAdmissionStatus");

  const admitOptions = [
    {
      label: "ভর্তি হয়েছি",
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

  // শর্ত সাপেক্ষে ডায়নামিক ভ্যালিডেশন চেক
  const isAdmitted = admissionStatus === "admitted";
  const isWillAdmit = admissionStatus === "will_admit";

  const isUniRequired = isAdmitted || isWillAdmit;
  const isDeptRequired = isAdmitted || isWillAdmit;
  const isCourseRequired = isAdmitted;
  const isSemesterRequired = isAdmitted;
  const isRollRequired = isAdmitted;

  return (
    <section className="w-full rounded-xl border border-violet-800 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-violet-800 px-4 py-3">
        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
          ৫. বর্তমান পড়াশুনার ইনফরমেশন{" "}
          <span className="font-semibold">(Educational Information)</span>
        </h2>
      </div>

      {/* Radio Options */}
      <div className="px-4 py-3">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="font-semibold text-gray-700 text-sm sm:text-base">
            ভর্তির স্ট্যাটাস: <span className="text-red-500">*</span>
          </span>
          {admitOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <input
                type="radio"
                value={option.value}
                {...register("currentAdmissionStatus", {
                  required: "ভর্তির স্ট্যাটাস নির্বাচন করা আবশ্যক",
                })}
                className="h-5 w-5 accent-violet-800 cursor-pointer"
              />
              <span className="text-sm sm:text-base">{option.label}</span>
            </label>
          ))}
        </div>
        {errors?.currentAdmissionStatus && (
          <p className="text-red-500 text-xs mt-1">
            {errors.currentAdmissionStatus.message}
          </p>
        )}
      </div>

      <hr className="border-violet-800 border" />

      {/* Dynamic Input Fields */}
      {admissionStatus && admissionStatus !== "not_admitted" && (
        <div className="px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* প্রতিষ্ঠানের নাম */}
          <InputField
            label={
              <span>
                বর্তমান স্কুল/কলেজ/বিশ্ববিদ্যালয়ের নাম{" "}
                {isUniRequired && <span className="text-red-500">*</span>}
              </span>
            }
            type="text"
            name="currentUniversityName"
            placeholder="ইংরেজি নাম লিখতে হবে"
            rules={
              isUniRequired
                ? { required: "প্রতিষ্ঠানের নাম দেওয়া আবশ্যক" }
                : undefined
            }
          />

          {/* ডিপার্টমেন্ট */}
          <InputField
            label={
              <span>
                যে ডিপার্টমেন্ট এ পড়েন{" "}
                {isDeptRequired && <span className="text-red-500">*</span>}
              </span>
            }
            type="text"
            name="currentDepartment"
            placeholder="Accounting, Economics, Chemistry, Physics, etc."
            rules={
              isDeptRequired
                ? { required: "ডিপার্টমেন্টের নাম দেওয়া আবশ্যক" }
                : undefined
            }
          />

          {/* কোর্সের নাম */}
          <InputField
            label={
              <span>
                কোর্সের নাম{" "}
                {isCourseRequired && <span className="text-red-500">*</span>}
              </span>
            }
            type="text"
            name="currentCourse"
            placeholder="CSE, EEE, BBA, BSc, BSS etc. লিখতে হবে"
            rules={
              isCourseRequired
                ? { required: "কোর্সের নাম দেওয়া আবশ্যক" }
                : undefined
            }
          />

          {/* বর্ষ/সেমিস্টার */}
          <InputField
            label={
              <span>
                যে বর্ষে/সেমিস্টারে পড়েন{" "}
                {isSemesterRequired && <span className="text-red-500">*</span>}
              </span>
            }
            type="text"
            name="currentSemester"
            placeholder="1st Year/ 1st Semester etc."
            rules={
              isSemesterRequired
                ? { required: "বর্ষ/সেমিস্টার দেওয়া আবশ্যক" }
                : undefined
            }
          />

          {/* রোল/আইডি নং */}
          <InputField
            label={
              <span>
                ক্লাস রোল/আইডি নং{" "}
                {isRollRequired && <span className="text-red-500">*</span>}
              </span>
            }
            type="text"
            name="currentRoll"
            placeholder="কলেজ আইডি অনুযায়ী লিখতে হবে"
            rules={
              isRollRequired
                ? { required: "ক্লাস রোল/আইডি দেওয়া আবশ্যক" }
                : undefined
            }
          />

          {/* রেজিস্ট্রেশন নং (সবসময় অপশনাল) */}
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
