import React from "react";
import InputField from "./common/InputField";

const JapaneseLanguage = () => {
  const japaneseCourseName = [
    {
      name: "JLPT",
      labelClassName: "text-violet-500",
      className: "focus:border-violet-500 border-violet-500",
    },
    {
      name: "NAT",
      labelClassName: "text-green-500",
      className: "focus:border-green-500 border-green-500",
    },
    {
      name: "JLCT",
      labelClassName: "text-yellow-500",
      className: "focus:border-yellow-500 border-yellow-500",
    },
    {
      name: "JPT",
      labelClassName: "text-red-500",
      className: "focus:border-red-500 border-red-500",
    },
    {
      name: "Top_J",
      labelClassName: "text-green-500",
      className: "focus:border-green-500 border-green-500",
    },
    {
      name: "J_Test",
      labelClassName: "text-violet-500",
      className: "focus:border-violet-500 border-violet-500",
    },
  ];
  return (
    <section className="w-full rounded-xl border border-blue-800 bg-white shadow-sm overflow-hidden ">
      {/* Header */}
      <div className="bg-blue-800 px-4 py-3">
        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
          ৬. জাপানিজ ভাষা শিক্ষা কোর্স, টেস্ট, স্কোর ইনফরমেশন{" "}
          <span className="font-semibold">
            (JAPANESE LANGUAGE COURSE, TEST, SCORE INFORMATION)
          </span>
        </h2>
      </div>

      {japaneseCourseName.map((item, index) => (
        <div
          key={index}
          className="px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <InputField
            label={`${item.name} এর লেভেল (যদি থাকে)`}
            type="text"
            className={item.className}
            name={`${item.name}Level`}
            labelClassName={item.labelClassName}
            placeholder="ইংরেজিতে লিখতে হবে। যেমনঃ N4/N5"
          />
          <InputField
            label={`${item.name} এর স্কোর (যদি থাকে)`}
            type="number"
            className={item.className}
            name={`${item.name}Score`}
            labelClassName={item.labelClassName}
            placeholder="ইংরেজিতে লিখতে হবে । যেমনঃ 70/80/100"
          />
          <InputField
            label={`${item.name} এর রোল/রেজিস্ট্রেশন নং (যদি থাকে)`}
            type="text"
            className={item.className}
            name={`${item.name}RollNumber`}
            labelClassName={item.labelClassName}
            placeholder="ইংরেজিতে লিখতে হবে । যেমনঃ 1234567890"
          />
          <InputField
            label={`${item.name} পরীক্ষার তারিখ (পরীক্ষা দিয়ে থাকলে)`}
            type="text"
            className={item.className}
            name={`${item.name}ExamDate`}
            labelClassName={item.labelClassName}
            placeholder="মাস-সন। যেমনঃ May-2020"
          />
          <InputField
            label={`${item.name} এর সম্ভাব্য পরীক্ষার তারিখ (পরীক্ষা না দিয়ে থাকলে)`}
            type="text"
            className={item.className}
            name={`${item.name}ExpectedExamDate`}
            labelClassName={item.labelClassName}
            placeholder="মাস-সন। যেমনঃ May-2020"
          />
        </div>
      ))}
    </section>
  );
};

export default JapaneseLanguage;
