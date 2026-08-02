import React from "react";
import InputField from "./common/InputField";
import YesNoField from "./common/YesNoField";
import { useFormContext } from "react-hook-form";

const FamilyInformation = () => {
  const { watch } = useFormContext();
  const hasFather = watch("hasFather");
  const hasMother = watch("hasMother");

  return (
    <section className="w-full rounded-xl border border-pink-500 bg-white shadow-sm overflow-hidden ">
      {/* Header */}
      <div className="bg-pink-800 px-4 py-3">
        <h2 className="text-white font-bold text-sm sm:text-base md:text-lg">
          ৩. ফ্যামিলি ইনফরমেশন{" "}
          <span className="font-semibold">(Family Information)</span>
        </h2>
      </div>
      <div className="px-4 py-3 grid grid-cols-1 md:grid-cols-2  gap-4">
        <YesNoField
          label="বাবা বেঁচে আছেন কি না?"
          name="hasFather"
          required={true}
        />
        <YesNoField
          label="মা বেঁচে আছেন কি না?"
          name="hasMother"
          required={true}
        />
      </div>
      <hr className="border-pink-500 border" />
      {/* Sponsor Name */}
      <div className="px-4 py-3 grid grid-cols-1 md:grid-cols-2  gap-4">
        {hasFather === "Yes" && (
          <>
            <InputField
              label="বাবার সম্পূর্ণ নাম"
              type="text"
              name="fatherName"
              placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
            />

            <InputField label="বাবার জন্ম তারিখ" type="date" name="fatherDob" />

            <InputField
              label="বাবার পেশা"
              type="text"
              name="fatherOccupation"
              placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
            />
          </>
        )}
        {hasMother === "Yes" && (
          <>
            <InputField
              label="মাতার সম্পূর্ণ নাম"
              type="text"
              name="motherName"
              placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
            />
            <InputField
              label="মাতার জন্ম তারিখ"
              type="date"
              name="motherDob"
              placeholder="সার্টিফিকেট অনুযায়ী জন্ম তারিখ লিখতে হবে"
            />
            <InputField
              label="মাতার পেশা"
              type="text"
              name="motherOccupation"
              placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
            />{" "}
          </>
        )}
        <InputField
          label="ভাই/বোনের সম্পূর্ণ নাম"
          type="text"
          name="siblingName"
          placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
        />
        <InputField
          label="সম্পর্ক"
          type="text"
          name="siblingRelationship"
          className="  placeholder:text-sm"
          placeholder="Elder Brother, Younger Sister, Elder Sister, Younger Brother"
        />
        <InputField
          label="ভাই/বোনের জন্ম তারিখ"
          type="date"
          name="siblingDob"
          placeholder="সার্টিফিকেট অনুযায়ী জন্ম তারিখ লিখতে হবে"
        />
        <InputField
          label="ভাই/বোনের পেশা"
          type="text"
          name="siblingOccupation"
          placeholder="সার্টিফিকেট অনুযায়ী ইংরেজি নাম লিখতে হবে"
        />
      </div>
    </section>
  );
};

export default FamilyInformation;
