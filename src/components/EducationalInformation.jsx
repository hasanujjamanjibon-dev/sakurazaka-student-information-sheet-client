import React from "react";
import InputField from "./common/InputField";
import TextAreaFiled from "./common/TextAreaFiled";

const EducationalInformation = () => {
  const educationFields = [
    {
      title: "১. প্রাইমারি স্কুল",
      name: "primary",
      labelClassName: "text-blue-500 ",
      className: "focus:border-blue-500 border-blue-500",
    },
    {
      title: "২. এস.এস.সি/দাখিল স্কুল",
      name: "secondary",
      labelClassName: "text-red-500 ",
      className: "focus:border-red-500 border-red-500",
    },
    {
      title: "৩. এইচ.এস.সি/আলিম/ডিপ্লোমা কলেজ",
      name: "higherSecondary",
      labelClassName: "text-teal-500 ",
      className: "focus:border-teal-500 border-teal-500",
    },
    {
      title: "৪. অনার্স কলেজের/বিশ্ববিদ্যালয়",
      name: "honours",
      labelClassName: "text-violet-500 ",
      className: "focus:border-violet-500 border-violet-500",
    },
    {
      title: "৫. মাস্টার্স কলেজের/বিশ্ববিদ্যালয়",
      name: "masters",
      labelClassName: "text-green-500 ",
      className: "focus:border-green-500 border-green-500",
    },
  ];
  return (
    <section className="w-full rounded-xl border border-red-800 bg-white shadow-sm overflow-hidden ">
      {/* Header */}
      <div className="bg-red-800 px-4 py-3">
        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
          ৪. পড়াশুনার ইনফরমেশন{" "}
          <span className="font-semibold">(Educational Information)</span>
        </h2>
      </div>
      {educationFields.flatMap((item, index) => (
        <div
          key={index}
          className="px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <InputField
            label={`${item.title} এর নাম`}
            type="text"
            className={item.className}
            name={`${item.name}SchoolName`}
            labelClassName={item.labelClassName}
            placeholder="ইংরেজিতে লিখতে হবে"
          />
          <TextAreaFiled
            label={`${item.title} এর ঠিকানা`}
            rows="2"
            className={item.className}
            name={`${item.name}SchoolAddress`}
            placeholder="ইংরেজিতে লিখতে হবে"
            labelClassName={item.labelClassName}
          />
          <InputField
            label={`${item.title} এর পাশের সন`}
            type="text"
            className={item.className}
            name={`${item.name}PassingYear`}
            placeholder="মাস+পাশের সনঃ May-2020"
            labelClassName={item.labelClassName}
          />
        </div>
      ))}
    </section>
  );
};

export default EducationalInformation;
